import { Mailer } from '@redwoodjs/mailer-core'
import { InMemoryMailHandler } from '@redwoodjs/mailer-handler-in-memory'
import { NodemailerMailHandler } from '@redwoodjs/mailer-handler-nodemailer'
import { StudioMailHandler } from '@redwoodjs/mailer-handler-studio'
import { ReactEmailRenderer } from '@redwoodjs/mailer-renderer-react-email'

import { logger } from './logger'

export const mailer = new Mailer({
  rendering: {
    renderers: {
      reactEmail: new ReactEmailRenderer(),
    },
    default: 'reactEmail',
  },

  handling: {
    handlers: {
      test: new InMemoryMailHandler(),
      dev: new StudioMailHandler(),
      prod: new NodemailerMailHandler({
        transport: {
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT,
          auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD,
          },
        },
      }),
    },
    default: 'prod',
  },

  defaults: {
    // any default send options
  },

  development: {
    handler: 'dev',
    when: process.env.NODE_ENV !== 'production',
  },

  test: {
    handler: 'test',
    when: process.env.NODE_ENV === 'test',
  },

  logger,
})
