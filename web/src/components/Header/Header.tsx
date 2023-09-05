import { Constants } from 'src/utils/Constants'

interface Props {
  isNavShowing: boolean
  toggleNav: () => void
}

const Header = ({ isNavShowing = false, toggleNav }: Props) => {
  return (
    <header className="flex items-center gap-x-16 px-8 py-5">
      <img src="/images/logo.svg" alt="Redwood Conference" />
      <nav
        className={`${
          isNavShowing ? 'top-0' : '-top-full'
        } fixed left-0 z-mobileNav w-screen bg-darkGray transition-all duration-300 ease-in-out lg:relative lg:bg-transparent`}
      >
        <ul>
          <li className="lg:hidden">
            <button className="text-xl" onClick={toggleNav}>
              &times;
            </button>
          </li>
          <li>
            <a href={Constants.ABOUT}>About</a>
          </li>
          <li>
            <a className="whitespace-nowrap" href={Constants.SPEAKERS}>
              Speakers & Sessions
            </a>
          </li>
          <li className="lg:hidden">
            <a href={Constants.GITHUB_URL}>Code on GitHub</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
