import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SharePage = () => {
  return (
    <>
      <MetaTags title="Share" description="Share page" />

      <main className="page">
        <h1 className="page-title mb-4">We Can&apos;t Wait to See You</h1>
        <h2 className="subheading mb-12">September 27 - 28, 2023</h2>
        <div className="grid w-full grid-cols-2 gap-5">
          <div>
            <a href="#" className="share-button">
              Share on X / Twitter
            </a>
          </div>
          <div>
            <a href="#" className="share-button">
              Copy Share URL
            </a>
          </div>
          <div>
            <a href="#" className="share-button">
              Download Image
            </a>
          </div>
          <div>
            <a href="#" className="share-button">
              Add to Calendar
            </a>
          </div>
        </div>
      </main>
    </>
  )
}

export default SharePage
