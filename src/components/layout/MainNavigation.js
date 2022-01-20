import { Link } from 'react-router-dom';
import styleOf from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={styleOf.header}>
      <div>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups</Link>
          </li>
          <li>
            <Link to='/favorites'>Favorites</Link>
          </li>
          <li>
            <Link to='/new-meetup'>New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation;