import AdminHeader from 'src/components/Admin/AdminHeader/AdminHeader'

type AdminLayoutProps = {
  children?: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="mx-14">
      <AdminHeader />
      {children}
    </div>
  )
}

export default AdminLayout
