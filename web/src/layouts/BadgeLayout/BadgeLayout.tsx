import { useState } from 'react'

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
  const [isNavShowing, setIsNavShowing] = useState(false)

  const toggleNav = () => {
    setIsNavShowing((prevValue) => !prevValue)
  }

  return (
    <div className="v-screen badge-page h-screen" id="page">
      <div>
        <a
          href={Constants.GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-0 top-0 hidden opacity-20 hover:opacity-100 lg:block"
        >
          <img src="/images/github-corner.svg" alt="Code on GitHub" />
        </a>

        <button
          className="absolute right-4 top-4 flex flex-col gap-[6px] text-darkGray hover:text-steelBlue lg:hidden"
          onClick={toggleNav}
        >
          <div className="w-[32px] border-b-[3px] border-b-current" />
          <div className="w-[32px] border-b-[3px] border-b-current" />
          <div className="w-[32px] border-b-[3px] border-b-current" />
        </button>
      </div>
      <Header isNavShowing={isNavShowing} toggleNav={toggleNav} />
      <div className="relative h-[90%] w-full">
        <div className="form-placement">{children}</div>
        <div className="badge-placement">
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
