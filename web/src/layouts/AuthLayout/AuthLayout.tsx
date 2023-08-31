import { Toaster } from '@redwoodjs/web/toast'

type AuthLayoutProps = {
  children?: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="login center h-screen w-screen">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

      <div className="w-full max-w-[350px]">
        <img
          src="/images/logo.svg"
          alt="RedwoodJS Conference"
          className="mx-auto mb-12"
        />
        {children}
      </div>
    </main>
  )
}

export default AuthLayout
