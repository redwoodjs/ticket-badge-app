import { MetaTags } from '@redwoodjs/web'

import ParticipantCell from 'src/components/ParticipantCell'

interface Props {
  slug: string
}

const HomePage = ({ slug }: Props) => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <main className="page">
        <ParticipantCell slug={slug} />
      </main>
    </>
  )
}

export default HomePage
