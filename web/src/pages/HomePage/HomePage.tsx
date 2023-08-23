import { Form } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <main className="page">
        <div className="mb-6 flex items-center gap-5 text-center font-wide uppercase">
          <img src="/images/prisma.png" alt="Prisma" className="max-h-[60px]" />
          invites you to
        </div>

        <div>
          <h1 className="page-title mb-5">
            Register &<br /> Get your{' '}
            <span className="text-indianRed">Free</span>
            <br />
            Virtual Ticket
          </h1>
          <h2 className="subheading mb-5">
            or use PRISMA35 for 35% off
            <br /> an in-person ticket
          </h2>
          <h2 className="subheading mb-8">September 27 - 28, 2023</h2>
          <Form>
            <div className="relative flex flex-col gap-5 rounded-2xl bg-[#D3D3D3] px-9 pb-7 pt-10">
              <label htmlFor="email">Enter Your Email Address</label>
              <input
                type="email"
                className="min-h-[48px] border-b-2 border-b-black bg-transparent font-sans focus:border-b-indianRed focus:outline-none"
                placeholder=" " // required
              />
              <button className="w-full rounded-lg bg-steelBlue py-3 font-wide text-white hover:bg-darkSlateGray">
                Yes, please!
              </button>
            </div>
          </Form>
        </div>
      </main>
    </>
  )
}

export default HomePage
