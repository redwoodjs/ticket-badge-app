import Badge from 'src/components/Badge/Badge'
import Header from 'src/components/Header/Header'

type BadgeLayoutProps = {
  children?: React.ReactNode
}

const BadgeLayout = ({ children }: BadgeLayoutProps) => {
  return (
    <div className="v-screen h-screen bg-[#B6B6B6]" id="page">
      <Header />
      <div className="relative h-[90%] w-full">
        <div className="pl-[150px]">{children}</div>
        <div className="absolute bottom-[100px] right-[300px]">
          <Badge />
        </div>
      </div>
    </div>
  )
}

export default BadgeLayout
