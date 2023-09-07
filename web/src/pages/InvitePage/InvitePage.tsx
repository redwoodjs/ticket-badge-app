import { MetaTags } from '@redwoodjs/web'

import InviteCell from 'src/components/InviteCell'

type InviteLayoutProps = {
  id: number
}

const InvitePage = ({ id }: InviteLayoutProps) => {
  return (
    <>
      <MetaTags title="Invite" description="Invite page" />

      <main className="page">
        <InviteCell id={id} />
      </main>
    </>
  )
}

export default InvitePage
