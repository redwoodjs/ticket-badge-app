import { useEffect, useRef } from 'react'

import { Form, Label, TextField, Submit, FieldError } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import Icon from 'src/components/Icon/Icon'

const ForgotPasswordPage = () => {
  const { isAuthenticated, forgotPassword } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef?.current?.focus()
  }, [])

  const onSubmit = async (data: { username: string }) => {
    const response = await forgotPassword(data.username)

    if (response.error) {
      toast.error(response.error)
    } else {
      // The function `forgotPassword.handler` in api/src/functions/auth.js has
      // been invoked, let the user know how to get the link to reset their
      // password (sent in email, perhaps?)
      toast.success(
        'A link to reset your password was sent to ' + response.email
      )
      navigate(routes.login())
    }
  }

  return (
    <>
      <MetaTags title="Forgot Password" />

      <h1 className="page-title mb-8 text-center text-[56px] text-black">
        Forgot Password
      </h1>

      <Form onSubmit={onSubmit}>
        <div className="field">
          <Label name="username" errorClassName="rw-label rw-label-error">
            Username
          </Label>
          <TextField
            name="username"
            className="!border-black !text-black"
            errorClassName="rw-input rw-input-error"
            ref={usernameRef}
            validation={{
              required: {
                value: true,
                message: 'Username is required',
              },
            }}
          />

          <FieldError name="username" className="rw-field-error" />
        </div>

        <Submit className="center mb-4 w-full gap-x-3 rounded-md bg-steelBlue py-4 font-bold text-white hover:bg-darkSlateGray">
          <Icon id="check" />
          Submit
        </Submit>

        <div className="rw-text-center w-full">
          <Link
            to={routes.login()}
            className="mx-auto w-full border-b-1 border-b-black text-sm hover:border-b-transparent"
          >
            Login
          </Link>
        </div>
      </Form>
    </>
  )
}

export default ForgotPasswordPage
