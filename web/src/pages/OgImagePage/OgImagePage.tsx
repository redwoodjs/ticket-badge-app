import { MetaTags } from '@redwoodjs/web'

import OgParticipantCell from 'src/components/OgParticipantCell'

interface Props {
  id: number
}

const OgImagePage = ({ id }: Props) => {
  console.log({ id })
  return (
    <>
      <MetaTags
        title="OG Image for Participant"
        description="Generate OG Image for Participant"
      />
      <OgParticipantCell id={id} />
    </>
  )
}

export default OgImagePage
