import type { APIGatewayEvent, Context } from 'aws-lambda'

import { db } from 'src/lib/db'
import { og } from 'src/lib/og'

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
  switch (event.path) {
    case '/oauth/callback':
      return await callback(event)
    default:
      // Whatever this is, it's not correct, so return "Not Found"
      return {
        statusCode: 404,
      }
  }
}

const callback = async (event) => {
  const { code, participantId } = event.queryStringParameters

  const response = await fetch(`https://github.com/login/oauth/access_token`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: process.env.GITHUB_OAUTH_CLIENT_ID,
      client_secret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
      redirect_uri: process.env.GITHUB_OAUTH_REDIRECT_URI,
      code,
    }),
  })

  const { access_token, error } = JSON.parse(await response.text())

  if (error) {
    return { statuscode: 400, body: error }
  }

  try {
    const providerUser = await getProviderUser(access_token)
    await updateParticipant(participantId, providerUser)

    return {
      statusCode: 302,
      headers: {
        Location: `/invite/${participantId}`,
      },
    }
  } catch (e) {
    return { statuscode: 500, body: e.message }
  }
}

const updateParticipant = async (participantId: string, providerUser) => {
  await db.participant.update({
    where: { id: parseInt(participantId) },
    data: {
      githubId: providerUser.id,
      name: providerUser.name,
      avatar: providerUser.avatar_url,
      location: providerUser.location,
      twitter: providerUser.twitter,
      company: providerUser.company,
    },
  })

  // We have to do this in 2 database calls because the ogImage grabs the info
  // out of the database and then displays it.
  // If we try to run the `og` function beforehand and make a single database
  // call it won't have everything it needs
  const ogImage = await og(parseInt(participantId))
  console.log(`🦄🦄🦄🦄🦄🦄🦄🦄 ${ogImage} 🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄`)
  await db.participant.update({
    where: { id: parseInt(participantId) },
    data: { ogImage },
  })

  return
}

const getProviderUser = async (token) => {
  const response = await fetch('https://api.github.com/user', {
    headers: { Authorization: `Bearer ${token}` },
  })
  const body = JSON.parse(await response.text())

  return body
}
