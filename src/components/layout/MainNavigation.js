import { Link } from 'react-router-dom';
import styles from './MainNavigation.module.css';
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import Notification from './Notification';

function MainNavigation() {

  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={styles.header}>
      <h1>React Meetups</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups</Link>
          </li>
          <li>
            <Link to='/favorites'>Favorites</Link><Notification totalFavs={favoritesCtx.totalFavorites} />
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