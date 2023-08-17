import Badge from 'src/components/Badge/Badge'
import Header from 'src/components/Header/Header'

type BadgeLayoutProps = {
  children?: React.ReactNode
}

const BadgeLayout = ({ children }: BadgeLayoutProps) => {
  return (
    <div className="v-screen h-screen bg-[#B6B6B6]">
      <Header />
      <div>
        <div>{children}</div>
        <div>
          <Badge />
        </div>
      </div>
    </div>
  )
}

export default BadgeLayout
