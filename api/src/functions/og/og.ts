import type { APIGatewayEvent, Context } from 'aws-lambda'

import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */

export const handler = async (event: APIGatewayEvent, _context: Context) => {
  // sets the default response
  let statusCode = 200
  let message = ''

  logger.info(`${event.httpMethod} ${event.path}: og function`)

  const { id } = event.queryStringParameters
  if (id === undefined) {
    statusCode = 400
    message = `Please specify an id`
    throw Error(message)
  }

  const saveImageInDb = async (url) => {
    // save image in db
    await db.participant.update({
      where: { id: parseInt(id) },
      data: {
        ogImage: url,
      },
    })

    console.log('🦄🦄🦄 MAGIC 🦄🦄🦄')
    console.log({ url })
  }

  const uploadFile = async () => {
    const file = `${process.env.REDWOOD_ENV_API_FLASH}&width=1200&height=630&delay=3&url=${process.env.REDWOOD_ENV_SCREENSHOT_URL}/og/19`
    console.log({ file })

    const url = `https://api.cloudinary.com/v1_1/${process.env.REDWOOD_ENV_CLOUDINARY_CLOUD}/image/upload`
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'badges')

    fetch(url, {
      method: 'POST',
      body: formData,
    }).then(async (response) => {
      const result = await response.json()
      saveImageInDb(result.url)
      return result
    })
  }

  try {
    const uploadedFile = await uploadFile()
    console.log({ uploadedFile })
  } catch (error) {
    console.log({ error })
  }

  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: 'og function',
    }),
  }
}
