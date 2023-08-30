import { MetaTags } from '@redwoodjs/web'

import PartnerCell from 'src/components/PartnerCell'

interface Props {
  slug: string
}

const HomePage = ({ slug }: Props) => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <main className="page">
        {/* TODO: Use Cookies to determine if the user has already completed the form */}
        <PartnerCell slug={slug} />
      </main>
    </>
  )
}

export default HomePage
