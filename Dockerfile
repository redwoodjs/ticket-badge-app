# base
# ------------------------------------------------

# FROM node:18-bookworm-slim as base
# node distributions are failing during yarn install
# using alpine for build
FROM node:18-alpine as base

USER node
WORKDIR /home/node/app

COPY --chown=node:node .yarn/plugins .yarn/plugins
COPY --chown=node:node .yarn/releases .yarn/releases
COPY --chown=node:node .yarnrc.yml .
COPY --chown=node:node package.json .
COPY --chown=node:node api/package.json api/
COPY --chown=node:node web/package.json web/
COPY --chown=node:node yarn.lock .

ENV NODE_ENV development

RUN --mount=type=cache,target=/home/node/.yarn/berry/cache,uid=1000 \
    --mount=type=cache,target=/home/node/.cache,uid=1000 \
    yarn install --immutable

COPY --chown=node:node redwood.toml .
COPY --chown=node:node graphql.config.js .

# api build
# ------------------------------------------------
FROM base as api_build

COPY --chown=node:node api api

RUN node ./node_modules/.bin/rw build api

# migrate: Prisma DB and dataMigrate
# ------------------------------------------------
FROM api_build as migration_steps

COPY --chown=node:node web web
RUN node ./node_modules/.bin/rw build web --no-prerender

COPY .fly .fly
# assuming MIGRATE_ON_BOOT needed to avoid re-running during scaling
ENTRYPOINT ["sh"]
CMD [".fly/migrate.sh"]

# web prerender build
# ------------------------------------------------
# prerender needs to run after DB migration steps
FROM api_build as web_build_with_prerender

COPY --chown=node:node web web
RUN node ./node_modules/.bin/rw build web

# API and Web serve combined for SSR
# ------------------------------------------------
FROM node:18-alpine as api_web_serve_build


USER node
WORKDIR /home/node/app

COPY --chown=node:node --from=web_build_with_prerender /home/node/app /home/node/app

RUN yarn plugin import workspace-tools
RUN yarn workspaces list

# install ONLY production dependencies
RUN --mount=type=cache,target=/home/node/.yarn/berry/cache,uid=1000 \
    --mount=type=cache,target=/home/node/.cache,uid=1000 \
    yarn workspaces focus api web --production

#serve
# -------------------------------------------------
# make it a tiny image https://snyk.io/blog/choosing-the-best-node-js-docker-image/
FROM gcr.io/distroless/nodejs18-debian11 as api_web_serve

ENV NODE_ENV=production \
    API_HOST=http://api:8911

USER node
WORKDIR /home/node/app

COPY --chown=node:node --from=api_web_serve_build /home/node/app/api/dist /home/node/app/api/dist
COPY --chown=node:node --from=api_web_serve_build /home/node/app/api/db /home/node/app/api/db
COPY --chown=node:node --from=api_web_serve_build /home/node/app/node_modules/ /home/node/app/node_modules/
COPY --chown=node:node --from=api_web_serve_build /home/node/app/web/dist /home/node/app/web/dist
# copy generated Prisma client
COPY --chown=node:node --from=web_build_with_prerender /home/node/app/node_modules/.prisma /home/node/app/node_modules/.prisma

COPY .fly .fly

ENTRYPOINT ["sh"]
CMD [".fly/start.sh"]
