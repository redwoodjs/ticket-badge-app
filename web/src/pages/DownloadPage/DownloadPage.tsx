import { MetaTags } from '@redwoodjs/web'

import DownloadCell from 'src/components/DownloadCell'

const DownloadPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Download" description="Download page" />

      <DownloadCell id={id} />
    </>
  )
}

export default DownloadPage
