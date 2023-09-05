import Badge from 'src/components/Badge/Badge'
import BadgeCell from 'src/components/BadgeCell'
import Header from 'src/components/Header/Header'
import useCookie from 'src/hooks/useCookie'
import { Constants } from 'src/utils/Constants'

type BadgeLayoutProps = {
  children?: React.ReactNode
}

const BadgeLayout = ({ children }: BadgeLayoutProps) => {
  const [participantId] = useCookie('participantId')

  return (
    <div className="v-screen badge-page h-screen" id="page">
      <div>
        <a
          href={Constants.GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-0 top-0 opacity-20 hover:opacity-100"
        >
          <img src="/images/github-corner.svg" alt="Code on GitHub" />
        </a>
      </div>
      <Header />
      <div className="relative h-[90%] w-full">
        <div className="h-full pl-[150px]">{children}</div>
        <div className="absolute bottom-[100px] right-[300px]">
          {participantId ? (
            <BadgeCell id={parseInt(participantId)} />
          ) : (
            <Badge />
          )}
        </div>
      </div>
    </div>
  )
}

export default BadgeLayout
