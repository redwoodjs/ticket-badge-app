import { useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import AddButton from 'src/components/Admin/AddButton/AddButton'
import SlideOut from 'src/components/Admin/SlideOut/SlideOut'
import UserForm from 'src/components/Admin/Users/UserForm/UserForm'
import UsersCell from 'src/components/Admin/Users/UsersCell'

const UsersPage = () => {
  const [isUserFormShowing, setIsUserFormShowing] = useState(false)

  return (
    <>
      <MetaTags title="Users" description="Users page" />

      <div>
        <div
          className="users-table border-b-2 border-b-gainsboro"
          role="columnheader"
        >
          <div>Accepted</div>
          <div>User</div>
          <div>
            <AddButton
              handleClick={() => setIsUserFormShowing(true)}
              label="Add a Speaker"
            />
          </div>
        </div>
        <UsersCell />
      </div>

      <SlideOut
        isShowing={isUserFormShowing}
        handleClose={() => setIsUserFormShowing(false)}
      >
        <UserForm />
      </SlideOut>
    </>
  )
}

export default UsersPage
