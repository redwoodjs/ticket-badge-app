import { useEffect, useRef, useState } from 'react'

import {
  Form,
  Label,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import Icon from 'src/components/Icon/Icon'

const ResetPasswordPage = ({ resetToken }: { resetToken: string }) => {
  const { isAuthenticated, reauthenticate, validateResetToken, resetPassword } =
    useAuth()
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  useEffect(() => {
    const validateToken = async () => {
      const response = await validateResetToken(resetToken)
      if (response.error) {
        setEnabled(false)
        toast.error(response.error)
      } else {
        setEnabled(true)
      }
    }
    validateToken()
  }, [resetToken, validateResetToken])

  const passwordRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    passwordRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await resetPassword({
      resetToken,
      password: data.password,
    })

    if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Password changed!')
      await reauthenticate()
      navigate(routes.login())
    }
  }

  return (
    <>
      <MetaTags title="Reset Password" />

      <h1 className="page-title mb-8 text-center text-[56px] text-black">
        Reset Password
      </h1>

      <Form onSubmit={onSubmit}>
        <div className="field">
          <Label name="password" errorClassName="rw-label rw-label-error">
            New Password
          </Label>
          <PasswordField
            name="password"
            className="h-[60px] w-full border-1 border-black px-4 text-black"
            autoComplete="new-password"
            errorClassName="rw-input rw-input-error"
            disabled={!enabled}
            ref={passwordRef}
            validation={{
              required: {
                value: true,
                message: 'New Password is required',
              },
            }}
          />

          <FieldError name="password" className="rw-field-error" />
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

export default ResetPasswordPage
