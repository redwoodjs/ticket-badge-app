import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Icon from 'src/components/Icon/Icon'

const CustomizeTicketPage = () => {
  return (
    <>
      <MetaTags title="CustomizeTicket" description="CustomizeTicket page" />

      <main className="page flex h-full items-center">
        <div>
          <h1 className="page-title">You&apos;re In!</h1>
          <h2 className="subheading mb-12 text-indianRed">Now Make it Yours</h2>
          <a href="https://github.com" className="share-button mb-4">
            <Icon id="github" />
            Customize Your Ticket
          </a>
          <p className="text font-xs text-center">
            Only public information will be used.
          </p>
        </div>
      </main>
    </>
  )
}

export default CustomizeTicketPage
