import { MetaTags } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'

import Badge from 'src/components/Badge/Badge'
import BadgeCell from 'src/components/BadgeCell'
import Header from 'src/components/Header/Header'
import InviteCell from 'src/components/InviteCell'
import { Constants } from 'src/utils/Constants'

type InviteLayoutProps = {
  id: number
}

const InvitePage = ({ id }: InviteLayoutProps) => {
  return (
    <>
      <MetaTags title="Invite" description="Invite page" />

      <div className="v-screen badge-page h-screen" id="page">
        <Toaster />
        <div>
          <a
            href={Constants.GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-0 top-0 opacity-20 hover:opacity-100"
          >
            <img src="/images/github-corner.svg" alt="Code on GitHub" />
          </a>
        </div>
        <Header />
        <div className="relative h-[90%] w-full">
          <div className="h-full pl-[150px]">
            <main className="page">
              {/* form on the left side */}
              <InviteCell id={id} />
            </main>
          </div>
          <div className="absolute bottom-[100px] right-[300px]">
            {/* badge on the right with the participant details */}
            <BadgeCell id={id} />
          </div>
        </div>
      </div>
    </>
  )
}

export default InvitePage
