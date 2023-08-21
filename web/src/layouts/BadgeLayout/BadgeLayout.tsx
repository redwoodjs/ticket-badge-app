import Badge from 'src/components/Badge/Badge'
import Header from 'src/components/Header/Header'

type BadgeLayoutProps = {
  children?: React.ReactNode
}

const BadgeLayout = ({ children }: BadgeLayoutProps) => {
  return (
    <div className="v-screen h-screen bg-[#B6B6B6]" id="page">
      <Header />
      <div className="relative h-full w-full">
        <div>{children}</div>
        <div className="absolute bottom-[100px] right-[50px]">
          <Badge bounds="#page" />
        </div>
      </div>
    </div>
  )
}

export default BadgeLayout
