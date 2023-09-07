#!/bin/sh

set -ex

# npx prisma is failing due to != verification hash
# try
# npm cache verify
# npm cache clean --force

# npx prisma migrate deploy --schema /home/node/app/api/db/schema.prisma
# npx @redwoodjs/cli-data-migrate@canary --import-db-client-from-dist
