import { MetaTags } from '@redwoodjs/web'

const InvitePage = ({ id }) => {
  console.log({ id })
  return (
    <>
      <MetaTags title="Invite" description="Invite page" />

      <h1>InvitePage</h1>
      <p>
        Find me in <code>./web/src/pages/InvitePage/InvitePage.tsx</code>
      </p>
    </>
  )
}

export default InvitePage
