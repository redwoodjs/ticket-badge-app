import { Constants } from 'src/utils/Constants'

const Header = () => {
  return (
    <header className="flex items-center gap-x-16 px-8 py-5">
      <img src="/images/logo.svg" alt="Redwood Conference" />
      <nav>
        <ul>
          <li>
            <a href={Constants.ABOUT}>About</a>
          </li>
          <li>
            <a href={Constants.SPEAKERS}>Speakers & Sessions</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
