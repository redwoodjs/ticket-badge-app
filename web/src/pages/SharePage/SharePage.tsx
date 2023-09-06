import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Icon from 'src/components/Icon/Icon'
import { TwitterShareUrl } from 'src/helpers/TwitterHelpers'
import useCookie from 'src/hooks/useCookie'
import { useCopyToClipboard } from 'src/hooks/useCopyToClipboard'
import { Constants } from 'src/utils/Constants'

const SharePage = () => {
  // If there is no participantId cookie, redirect to the home page
  const [participantId] = useCookie('participantId')
  if (!participantId) {
    navigate(routes.home())
  }

  const [, copy] = useCopyToClipboard()
  const [copyShareText, setCopyShareText] = React.useState('Copy Share URL')

  const copyToClipboard = () => {
    const text = `${process.env.REDWOOD_ENV_BASE_URL}/invite/${participantId}`
    copy(text)
    setCopyShareText('Copied!')
    setTimeout(() => setCopyShareText('Copy Share URL'), 1000)
  }

  return (
    <>
      <MetaTags title="Share" description="Share page" />

      <main className="page h-full md:flex md:items-center">
        <div>
          <h1 className="page-title mb-4">We Can&apos;t Wait to See You</h1>
          <h2 className="subheading mb-12">September 27 - 28, 2023</h2>
          <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
            <div>
              <a
                href={TwitterShareUrl({
                  description: 'I just registered for RedwoodJS Conf!',
                  hashtags: 'RedwoodJSConf',
                  url: 'https://redwoodjsconf.com',
                })}
                className="share-button"
              >
                <Icon id="twitter" />
                Share on X / Twitter
              </a>
            </div>
            <div>
              <button onClick={copyToClipboard} className="share-button">
                <Icon id="copy" />
                {copyShareText}
              </button>
            </div>
            <div>
              <a
                href={`https://api.apiflash.com/v1/urltoimage?access_key=eadde47932454b54a1718823d2ead7cd&wait_until=page_loaded&width=351&height=537&delay=3&url=${process.env.REDWOOD_ENV_SCREENSHOT_URL}/download/${participantId}`}
                className="share-button"
                download="badge.png"
                target="_blank"
                rel="noreferrer"
              >
                <Icon id="download" />
                Download Image
              </a>
            </div>
            <div>
              <a
                href={Constants.CALENDAR_URL}
                className="share-button"
                download={true}
              >
                <Icon id="calendar" />
                Add to Calendar
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default SharePage
