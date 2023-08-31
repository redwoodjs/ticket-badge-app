import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import Icon from 'src/components/Icon/Icon'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.dashboard())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await logIn({
      username: data.username,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <MetaTags title="Login" />

      <h1 className="page-title mb-8 text-center text-[56px] text-black">
        Login
      </h1>
      <Form onSubmit={onSubmit}>
        <div className="field">
          <Label name="username" errorClassName="rw-label rw-label-error">
            Email
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

        <div className="field">
          <div className="mb-3 flex items-center justify-between">
            <Label
              className="mb-0"
              name="password"
              errorClassName="rw-label rw-label-error"
            >
              Password
            </Label>
            <Link
              to={routes.forgotPassword()}
              className="border-b-1 border-b-black text-sm hover:border-b-transparent"
            >
              Forgot?
            </Link>
          </div>
          <PasswordField
            name="password"
            className="h-[60px] w-full border-1 border-black px-4 text-black"
            errorClassName="rw-input rw-input-error"
            autoComplete="current-password"
            validation={{
              required: {
                value: true,
                message: 'Password is required',
              },
            }}
          />

          <FieldError name="password" className="rw-field-error" />
        </div>

        <Submit className="center mb-4 w-full gap-x-3 rounded-md bg-steelBlue py-4 font-bold text-white hover:bg-darkSlateGray">
          <Icon id="check" />
          Login
        </Submit>

        <div className="rw-text-center w-full">
          <Link
            to={routes.signup()}
            className="mx-auto w-full border-b-1 border-b-black text-sm hover:border-b-transparent"
          >
            Sign Up
          </Link>
        </div>
      </Form>
    </>
  )
}

export default LoginPage
