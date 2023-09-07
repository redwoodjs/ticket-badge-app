import type { APIGatewayEvent, Context } from 'aws-lambda'
import { v2 as cloudinary } from 'cloudinary'

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

cloudinary.config({
  cloud_name: 'duh8p234y',
  api_key: '961468836523215',
  api_secret: 'a676b67565c6767a6767d6767f676fe1',
})

export const handler = async (event: APIGatewayEvent, _context: Context) => {
  logger.info(`${event.httpMethod} ${event.path}: generateShareImage function`)

  // try {
  //   console.log('🦄 TRYING 🦄')
  //   const uploadedImage = await cloudinary.uploader.upload(
  //     'https://api.apiflash.com/v1/urltoimage?access_key=eadde47932454b54a1718823d2ead7cd&wait_until=page_loaded&width=351&height=537&delay=3&url=https://97559d701b13.ngrok.app/download/19',
  //     {
  //       upload_preset: 'badges',
  //       signatureAlgorithm: 'sha256',
  //     }
  //   )
  //   console.log({ uploadedImage })
  // } catch (error) {
  //   console.error(error)
  // }

  const uploadFile = async () => {
    const file =
      'https://api.apiflash.com/v1/urltoimage?access_key=eadde47932454b54a1718823d2ead7cd&wait_until=page_loaded&width=351&height=537&delay=3&url=https://97559d701b13.ngrok.app/download/19'

    const url = `https://api.cloudinary.com/v1_1/${process.env.REDWOOD_ENV_CLOUDINARY_CLOUD}/image/upload`
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'badges')

    fetch(url, {
      method: 'POST',
      body: formData,
    }).then((response) => {
      const result = response.json()
      saveImageInDb(result)
      return result
    })
  }

  const saveImageInDb = async (result) => {
    // save image in db
    console.log({ result })
  }

  const createOGImage = async () => {}

  const uploadedFile = await uploadFile()
  await createOGImage()

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: 'generateShareImage function',
    }),
  }
}
