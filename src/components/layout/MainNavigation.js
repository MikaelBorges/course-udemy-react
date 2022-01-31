import { Link } from 'react-router-dom';
import styles from './MainNavigation.module.css';
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import Notification from './Notification';

function MainNavigation(props) {

  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={styles.header}>
      <h1>React Meetups</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups</Link>
            {props.allMeetups ? <Notification notification={props.allMeetups} /> : null}
          </li>
          <li>
            <Link to='/favorites'>Favorites</Link>
            {favoritesCtx.totalFavorites ? <Notification notification={favoritesCtx.totalFavorites} /> : null}
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