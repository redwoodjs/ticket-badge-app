import { MetaTags } from '@redwoodjs/web'

import Header from 'src/components/Header/Header'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div>
        <div>
          <img src="" alt="" />
          invites you to
        </div>

        <div>
          <h1>
            Register &<br /> Get your <span>Free</span> Virtual Ticket
          </h1>
          <h2>September 27 - 28, 2023</h2>
          <div>
            <label htmlFor="email">Email Address</label>
            <input type="text" />
            <button>Yes, please!</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
