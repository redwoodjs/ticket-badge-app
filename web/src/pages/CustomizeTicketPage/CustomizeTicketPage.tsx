import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CustomizeTicketPage = () => {
  return (
    <>
      <MetaTags title="CustomizeTicket" description="CustomizeTicket page" />

      <main className="page">
        <h1 className="page-title">You&apos;re In!</h1>
        <h2 className="subheading mb-12">Now Make it Yours</h2>
        <a href="https://github.com" className="share-button mb-4">
          Customize Your Ticket
        </a>
        <p className="text font-xs text-center">
          Only public information will be used.
        </p>
      </main>
    </>
  )
}

export default CustomizeTicketPage
