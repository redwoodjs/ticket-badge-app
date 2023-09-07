import { useEffect, useState } from 'react'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import InviteCell from 'src/components/InviteCell'
import Share from 'src/components/Share/Share'
import useCookie from 'src/hooks/useCookie'

type InviteLayoutProps = {
  id: number
}

const InvitePage = ({ id }: InviteLayoutProps) => {
  const [participantId] = useCookie('participantId')

  // if the current user has already registered on this machine, redirect to their information
  useEffect(() => {
    if (participantId) {
      navigate(routes.invite({ id: parseInt(participantId) }))
    }
  }, [participantId])

  return (
    <>
      <MetaTags title="Invite" description="Invite page" />

      {/* if the user has already filled out the form, display their share data */}
      {/* otherwise, display the form */}
      {participantId ? (
        <Share participantId={parseInt(participantId)} />
      ) : (
        <main className="page">
          <InviteCell id={id} />
        </main>
      )}
    </>
  )
}

export default InvitePage
