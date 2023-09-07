import { MetaTags } from '@redwoodjs/web'

import DownloadCell from 'src/components/DownloadCell'

const DownloadPage = ({ id }) => {
  return (
    <>
      <MetaTags
        title="Download"
        description="Download virtual badge for RedwoodJS Confrence"
      />

      <DownloadCell id={id} />
    </>
  )
}

export default DownloadPage
