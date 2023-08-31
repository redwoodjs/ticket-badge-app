import { MetaTags } from '@redwoodjs/web'

import InviteCell from 'src/components/InviteCell'

const InvitePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Invite" description="Invite page" />

      <main className="page">
        <InviteCell participantId={id} />
      </main>
    </>
  )
}

export default InvitePage
