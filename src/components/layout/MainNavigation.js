import { Link } from 'react-router-dom';
import styles from './MainNavigation.module.css';
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import Notification from './Notification';

function MainNavigation(props) {

  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header
      className={`${styles.header} ${
        props.darkMode ? styles.darkMode : ""
      }`}
    >
      <h1>Meetups</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups</Link>
            {props.allMeetups ? <Notification colorOfNotification={false} notification={props.allMeetups} /> : null}
          </li>
          <li>
            <Link to='/favorites'>Favorites</Link>
            {favoritesCtx.totalFavorites ? <Notification colorOfNotification={true} notification={favoritesCtx.totalFavorites} /> : null}
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