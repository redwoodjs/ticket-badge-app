import Icon from 'src/components/Icon/Icon'
import { TwitterShareUrl } from 'src/helpers/TwitterHelpers'
import { useCopyToClipboard } from 'src/hooks/useCopyToClipboard'
import { Constants } from 'src/utils/Constants'

interface Props {
  participantId: number
}

const Share = ({ participantId }: Props) => {
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
                  url: `${process.env.REDWOOD_ENV_BASE_URL}/invite/${participantId}`,
                })}
                className="share-button"
                target="_blank"
                rel="noreferrer"
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
                href={`${process.env.REDWOOD_ENV_API_FLASH}&width=351&height=537&delay=3&url=${process.env.REDWOOD_ENV_SCREENSHOT_URL}/download/${participantId}`}
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

export default Share
