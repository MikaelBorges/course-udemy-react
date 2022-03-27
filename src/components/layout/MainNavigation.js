import { Link } from 'react-router-dom';
import styles from './MainNavigation.module.css';
import { useContext, useState } from "react";
import FavoritesContext from "../../store/favorites-context";
import Notification from './Notification';

function MainNavigation(props) {

  const favoritesCtx = useContext(FavoritesContext);
  const [navReduced, setNavReduced] = useState(true);

  return (
    <>
      <header
        className={`${styles.header} ${
          props.darkMode ? styles.darkMode : ""
        } ${
          props.navReduced ? "" : styles.headerReduced
        }`}
      >
        {navReduced && (
          <h1 className={styles.appTitle}>Meetups</h1>
        )}
        <nav>
          <ul
            className={`${
              navReduced ? '' : styles.navReduced
            }`}
          >
            <li>
              <Link to='/'>All Meetups</Link>
              {props.allMeetups ? <Notification navReduced={navReduced} colorOfNotification={false} notification={props.allMeetups} /> : null}
            </li>
            <li>
              <Link to='/favorites'>Favorites</Link>
              {favoritesCtx.totalFavorites ? <Notification navReduced={navReduced} colorOfNotification={true} notification={favoritesCtx.totalFavorites} /> : null}
            </li>
            <li>
              <Link to='/new-meetup'>New Meetup</Link>
            </li>
          </ul>
        </nav>
      </header>
      <button
        style={{
          borderRadius: '50%',
          backgroundColor: props.darkMode ? '#0a1120' : 'white',
          boxShadow: 'rgb(0 0 0 / 24%) 0px 3px 8px',
          border: 'none',
          position: 'fixed',
          bottom: '20px',
          right: '110px',
          zIndex: '1',
          padding: '17px 22px',
        }}
        onClick={() => {
          setNavReduced(!navReduced);
        }}
      >
        📱
      </button>
    </>
  )
}

export default MainNavigation;