import { Link } from 'react-router-dom';
import styles from './MainNavigation.module.css';
import { useContext, useState, useRef, useEffect } from "react";
import FavoritesContext from "../../store/favorites-context";
import Notification from './Notification';

function MainNavigation(props) {

  const favoritesCtx = useContext(FavoritesContext);
  const [dynamicHeaderHeight, setDynamicHeaderHeight] = useState();

  /* window.onscroll = function () {  
    console.log(window.scrollY);
  } */
  /* const divStyle = {
      height: this.state.heightSet + 'px',
  }; */

  const header = useRef();
  /* useEffect(() => {
    const headerHeight = header.current.clientHeight + 'px';
    console.log('headerHeight', headerHeight);
    setDynamicHeaderHeight(headerHeight);
    window.onscroll = function () {
      console.log(window.scrollY);
      let dynamicHeaderHeight = (headerHeight - window.scrollY) + 'px';
      console.log('dynamicHeaderHeight', dynamicHeaderHeight);
      setDynamicHeaderHeight(dynamicHeaderHeight);
    }
  }, []); */

  return (
    <>
      <header
        /* style={{height: dynamicHeaderHeight}} */
        ref={header}
        /* className={`${styles.header} ${
          props.darkMode ? styles.darkMode : ""
        }`} */
        className={`${styles.header} ${
          props.darkMode ? styles.darkMode : ""
        } ${
          props.isBigNav ? styles.headerReduced : ''
        }`}
      >
        {props.isBigNav && (
          <h1 className={styles.appTitle}>Logements</h1>
        )}
        <nav>
          <ul
            className={`${
              props.isBigNav ? '' : styles.navReduced
            }`}
          >
            <li>
              <Link to='/'>Tous les logements</Link>
              {props.allMeetups ? <Notification darkMode={props.darkMode} navReduced={props.isBigNav} colorOfNotification={false} notification={props.allMeetups} /> : null}
            </li>
            <li>
              <Link to='/favorites'>Favoris</Link>
              {favoritesCtx.totalFavorites ? <Notification navReduced={props.isBigNav} colorOfNotification={true} notification={favoritesCtx.totalFavorites} /> : null}
            </li>
            <li>
              <Link to='/new-meetup'>Nouveau logement</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* <button
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
      </button> */}
    </>
  )
}

export default MainNavigation;