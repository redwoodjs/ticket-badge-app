import { MetaTags } from '@redwoodjs/web'

const TwitterPage = () => {
  return (
    <>
      <MetaTags
        title="Twitter Page Title"
        description="This is a description for us to test and see if the description is working"
        ogUrl="https://ticket.redwoodjs.com/twitter"
        ogContentUrl="http://res.cloudinary.com/duh8p234y/image/upload/v1694126172/partner-badges/badges/lmx3w99whvsuty4q9x6s.jpg"
      />
      <h1>Testing Twitter Meta Data</h1>
    </>
  )
}

export default TwitterPage
