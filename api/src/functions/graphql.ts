import { useResponseCache, createInMemoryCache } from '@envelop/response-cache'

import { authDecoder } from '@redwoodjs/auth-dbauth-api'
import { createGraphQLHandler } from '@redwoodjs/graphql-server'

import directives from 'src/directives/**/*.{js,ts}'
import sdls from 'src/graphql/**/*.sdl.{js,ts}'
import services from 'src/services/**/*.{js,ts}'

import { getCurrentUser } from 'src/lib/auth'
import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

const ONE_HOUR = 3600000
const ONE_DAY = 24 * 3600000

const cacheConfig = {
  ttl: 0,
  ttlPerSchemaCoordinate: {
    'Query.partnerBySlug': ONE_DAY,
    'Query.participant': ONE_HOUR,
  },
}

// Exporting it so I can use it to manually purge the cache
export const cache = createInMemoryCache()

export const handler = createGraphQLHandler({
  authDecoder,
  getCurrentUser,
  loggerConfig: { logger, options: {} },
  directives,
  sdls,
  services,
  extraPlugins:
    process.env.NODE_ENV === 'production'
      ? [useResponseCache({ cache, session: () => null, ...cacheConfig })]
      : [],

  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect()
  },
})
