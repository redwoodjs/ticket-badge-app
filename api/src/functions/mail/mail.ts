import type { APIGatewayEvent, Context } from 'aws-lambda'

import { logger } from 'src/lib/logger'
import { mailer } from 'src/lib/mailer'
import { TestEmail } from 'src/mail/TestEmail'

export const handler = async (event: APIGatewayEvent, _context: Context) => {
  logger.info(`${event.httpMethod} ${event.path}: mail function`)

  const result = await mailer.send(
    TestEmail({
      content: 'This is a test email.',
    }),
    {
      to: 'joshgmwalker@gmail.com',
      from: 'testing@redwoodjs.com',
      subject: 'Test email',
    }
  )

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      result,
    }),
  }
}
