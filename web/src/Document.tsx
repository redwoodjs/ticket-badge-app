import React from 'react'

import { Css, Meta } from '@redwoodjs/web'
import type { TagDescriptor } from '@redwoodjs/web'

interface DocumentProps {
  children: React.ReactNode
  css: string[] // array of css import strings
  meta?: TagDescriptor[]
}

export const Document: React.FC<DocumentProps> = ({ children, css, meta }) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <script
          src="https://cdn.usefathom.com/script.js"
          data-spa="auto"
          data-site="UPFFRZZI"
          defer
        ></script>
        <Css css={css} />
        <Meta tags={meta} />
        <title data-rwjs-head="true">
          Tom Preston-Werner Invites you to the RedwoodJS Conference
        </title>
        <meta
          property="og:title"
          content="Tom Preston-Werner Invites you to the RedwoodJS Conference"
          data-rwjs-head="true"
        />
        <meta
          property="twitter:title"
          content="Tom Preston-Werner Invites you to the RedwoodJS Conference"
          data-rwjs-head="true"
        />
        <meta
          name="description"
          content="Join Tom Preston-Werner at the RedwoodJS Conference! Get a free virtual ticket or 35% off an in-person pass. Experience the latest in web development and connect with leading experts. Register now for this must-attend event."
          data-rwjs-head="true"
        />
        <meta
          name="twitter:description"
          content="Join Tom Preston-Werner at the RedwoodJS Conference! Get a free virtual ticket or 35% off an in-person pass. Experience the latest in web development and connect with leading experts. Register now for this must-attend event."
          data-rwjs-head="true"
        />
        <meta
          property="og:description"
          content="Join Tom Preston-Werner at the RedwoodJS Conference! Get a free virtual ticket or 35% off an in-person pass. Experience the latest in web development and connect with leading experts. Register now for this must-attend event."
          data-rwjs-head="true"
        />
        <meta
          property="og:url"
          content="https://ticket.redwoodjs.com/invite/undefined"
          data-rwjs-head="true"
        />
        <meta property="og:type" content="website" data-rwjs-head="true" />
        <meta
          property="og:image"
          content="http://res.cloudinary.com/duh8p234y/image/upload/v1694126172/partner-badges/badges/urltoimage_btrs0r.jpg"
          data-rwjs-head="true"
        />
        <meta
          property="twitter:card"
          content="summary_large_image"
          data-rwjs-head="true"
        />
        <meta
          property="twitter:image"
          content="http://res.cloudinary.com/duh8p234y/image/upload/v1694126172/partner-badges/badges/urltoimage_btrs0r.jpg"
          data-rwjs-head="true"
        />
      </head>
      <body>
        <div id="redwood-app">{children}</div>
      </body>
    </html>
  )
}
