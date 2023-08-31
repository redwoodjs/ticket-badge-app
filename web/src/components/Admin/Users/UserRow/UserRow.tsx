import { useState } from 'react'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import Icon from 'src/components/Icon/Icon'
import { getCurrentUser } from 'src/lib/auth'

import ButtonWithToolTip from '../../ButtonWithTooltip/ButtonWithTooltip'
import Modal from '../../Modal/Modal'
import SlideOut from '../../SlideOut/SlideOut'
import UserForm from '../UserForm/UserForm'
import { DELETE_USER_MUTATION } from '../UserForm/UserMutations'
import { QUERY as UsersQuery } from '../UsersCell/UsersCell'

const UserRow = ({ user }) => {
  const [isUserFormShowing, setIsUserFormShowing] = useState(false)
  const [isConfirmDeleteShowing, setIsConfirmDeleteShowing] = useState(false)

  const [deleteUser, deleteUserStatus] = useMutation(DELETE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User deleted!')
    },
    refetchQueries: [{ query: UsersQuery }],
  })

  const handleEdit = () => {
    setIsUserFormShowing(true)
  }

  const handleDelete = () => {
    setIsConfirmDeleteShowing(true)
  }

  const confirmUserDelete = () => {
    deleteUser({ variables: { id: user.id } })
  }

  const { currentUser } = useAuth()
  console.log({ currentUser })

  return (
    <>
      <div className="users-table min-h-[68px] border-b-1 border-b-gainsboro">
        <div className="flex items-center">
          <div className="mx-auto">{user.confirmed && <Icon id="check" />}</div>
        </div>
        <div>{user.email}</div>
        <div className="flex items-center justify-end">
          <div>
            <ButtonWithToolTip handleClick={handleEdit} toolTipText="Edit">
              <Icon id="edit" />
            </ButtonWithToolTip>
          </div>
          {currentUser.id !== user.id && (
            <div>
              <ButtonWithToolTip
                handleClick={handleDelete}
                toolTipText="Delete"
              >
                <Icon id="trash" />
              </ButtonWithToolTip>
            </div>
          )}
        </div>
      </div>

      <SlideOut
        isShowing={isUserFormShowing}
        handleClose={() => setIsUserFormShowing(false)}
      >
        <UserForm />
      </SlideOut>

      <Modal
        isShowing={isConfirmDeleteShowing}
        handleClose={() => setIsConfirmDeleteShowing(false)}
      >
        <div className="center h-full p-10 text-lg">
          <div>
            Are you sure you want to delete{' '}
            <strong className="text-chestnutRose">{user.email}</strong>?
            <div className="center mt-5 gap-x-4">
              <button
                onClick={() => setIsConfirmDeleteShowing(false)}
                className="rounded-md bg-gray-200 px-5 py-2 text-base font-bold text-black hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                className="flex items-center gap-x-1 whitespace-nowrap rounded-md bg-chestnutRose px-5 py-2 text-base text-white hover:bg-red-700"
                onClick={confirmUserDelete}
                disabled={deleteUserStatus.loading}
              >
                <Icon id="trash" />
                Delete It
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default UserRow
