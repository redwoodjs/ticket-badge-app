import { MetaTags } from '@redwoodjs/web'

import Icon from 'src/components/Icon/Icon'
import { useCopyToClipboard } from 'src/hooks/useCopyToClipboard'

const SharePage = () => {
  const [, copy] = useCopyToClipboard()
  const [copyShareText, setCopyShareText] = React.useState('Copy Share URL')

  const copyToClipboard = () => {
    const text = 'http://google.com'
    copy(text)
    setCopyShareText('Copied!')
    setTimeout(() => setCopyShareText('Copy Share URL'), 1000)
  }

  return (
    <>
      <MetaTags title="Share" description="Share page" />

      <main className="page flex h-full items-center">
        <div>
          <h1 className="page-title mb-4">We Can&apos;t Wait to See You</h1>
          <h2 className="subheading mb-12">September 27 - 28, 2023</h2>
          <div className="grid w-full grid-cols-2 gap-5">
            <div>
              <button className="share-button">
                <Icon id="twitter" />
                Share on X / Twitter
              </button>
            </div>
            <div>
              <button onClick={copyToClipboard} className="share-button">
                <Icon id="copy" />
                {copyShareText}
              </button>
            </div>
            <div>
              <button className="share-button">
                <Icon id="download" />
                Download Image
              </button>
            </div>
            <div>
              <button className="share-button">
                <Icon id="calendar" />
                Add to Calendar
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default SharePage
