import styles from './App.module.css';
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';
import "./fonts.css";

function App() {
  const [totalMeetups, setTotalMeetups] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isBigNav, setIsBigNav] = useState(true);
  const [cardViewButton, setCardViewButton] = useState(true);
  const [themeViewButton, setThemeCardViewButton] = useState(false);

  function changeStateMeetups(meetupsNumber) {
    setTotalMeetups(meetupsNumber);
  }

  function changeStateLoading(stateOfLoad) {
    setIsLoading(stateOfLoad);
  }

  function cardViewToggle() {
    setCardViewButton(!cardViewButton);
  }

  function themeViewToggle() {
    setThemeCardViewButton(!themeViewButton);
  }

  function changeStateNav(stateOfNav) {
    setIsBigNav(stateOfNav);
  }








  /* function checkTime() {
    let h = true;
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    console.log('s', s);
    
    if (h) {
      if (s > 0 && s < 30) {
        console.log('lightmode');

        if (!themeViewButton) {
          console.log('apply once');
          setThemeCardViewButton(false);
        }
      }
      else {
        console.log('darkmode');
        if (themeViewButton) {
          console.log('apply once');
          setThemeCardViewButton(true);
        }
      }
    }
  }

  useEffect(() => {
    
    checkTime();
    setInterval(checkTime, 1000);
  }); */


    /* var heures_depart = new Date().getHours();
    var heures, minutes, secondes; */
    /* var src = $('#img_on_off').attr('src'); */
    /* if (heures_depart>=6 && heures_depart<8) {
      $('video:first').attr('src','video/background-sunrise.mp4');
      $('video:last').attr('src','video/background-day.mp4');
    }
    else if (heures_depart>=8 && heures_depart<19) {
      $('video:first').attr('src','video/background-day.mp4');
      $('video:last').attr('src','video/background-sunset.mp4');
    }
    else if (heures_depart>=19 && heures_depart<21) {
      $('video:first').attr('src','video/background-sunset.mp4');
      $('video:last').attr('src','video/background-night.mp4');
    }
    else {
      $('video:first').attr('src','video/background-night.mp4');
      $('video:last').attr('src','video/background-sunrise.mp4');
    } */
    /* function Horloge() {
      heures = new Date().getHours();
      minutes = new Date().getMinutes();
      secondes = new Date().getSeconds();
      //var h = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
      //$('#heure').text(h);
      if (heures==6 && minutes==0 && secondes==0) {
        $('video:first').fadeOut(2990);
      }
      if (heures==6 && minutes==0 && secondes==45) {
        $('video:first').attr('src','video/background-sunrise.mp4');
        $('video:first').show();
        $('video:last').attr('src','video/background-day.mp4');
      }
      if (heures==8 && minutes==0 && secondes==0) {
        $('video:first').fadeOut(2990);
      }
      if (heures==8 && minutes==2 && secondes==28) {
        $('video:first').attr('src','video/background-day.mp4');
        $('video:first').show();
        $('video:last').attr('src','video/background-sunset.mp4');
      }
      if (heures==19 && minutes==0 && secondes==0) {
        $('video:first').fadeOut(2990);
      }
      if (heures==19 && minutes==0 && secondes==50) {
        $('video:first').attr('src','video/background-sunset.mp4');
        $('video:first').show();
        $('video:last').attr('src','video/background-night.mp4');
      }
      if (heures==21 && minutes==0 && secondes==0) {
        $('video:first').fadeOut(2990);
      }
      if (heures==21 && minutes==0 && secondes==48) {
        $('video:first').attr('src','video/background-night.mp4');
        $('video:first').show();
        $('video:last').attr('src','video/background-sunrise.mp4');
      }
    }
    setInterval(Horloge, 1000); */

    /* const 
    console.log('heures_depart', heures_depart);

    if (heures_dé) */












  return (
    <Layout isBigNav={isBigNav} isLoading={isLoading} meetupsLength={totalMeetups} darkMode={themeViewButton}>
      <Switch>
        <Route path='/' exact>
          <button
            className={`${styles.toggleButton} ${styles.toggleCardView} ${
              themeViewButton ? styles.darkMode : ""
            } ${
              cardViewButton ? "" : styles.withText
            }`}
            onClick={cardViewToggle}
          >
            {cardViewButton ? '🏞' : '🏞 + A'}
          </button>
          <AllMeetupsPage changeNav={changeStateNav} changeLoading={changeStateLoading} changeMeetups={changeStateMeetups} cardView={cardViewButton} darkMode={themeViewButton} />
          <button
            className={`${styles.toggleButton} ${styles.toggleThemeView} ${
              themeViewButton ? styles.darkMode : ""
            }`}
            onClick={themeViewToggle}
          >
            {themeViewButton ? '🌞' : '🌚'}
          </button>
        </Route>
        <Route path='/new-meetup'>
          <button
            className={`${styles.toggleButton} ${styles.toggleCardView} ${
              themeViewButton ? styles.darkMode : ""
            } ${
              cardViewButton ? "" : styles.withText
            }`}
            onClick={cardViewToggle}
          >
            {cardViewButton ? '🏞' : '🏞 + A'}
          </button>
          <NewMeetupPage darkMode={themeViewButton} />
          <button
            className={`${styles.toggleButton} ${styles.toggleThemeView} ${
              themeViewButton ? styles.darkMode : ""
            }`}
            onClick={themeViewToggle}
          >
            {themeViewButton ? '🌞' : '🌚'}
          </button>
        </Route>
        <Route path='/favorites'>
          <button
            className={`${styles.toggleButton} ${styles.toggleCardView} ${
              themeViewButton ? styles.darkMode : ""
            } ${
              cardViewButton ? "" : styles.withText
            }`}
            onClick={cardViewToggle}
          >
            {cardViewButton ? '🏞' : '🏞 + A'}
          </button>
          <FavoritesPage cardView={cardViewButton} darkMode={themeViewButton} />
          <button
            className={`${styles.toggleButton} ${styles.toggleThemeView} ${
              themeViewButton ? styles.darkMode : ""
            }`}
            onClick={themeViewToggle}
          >
            {themeViewButton ? '🌞' : '🌚'}
          </button>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
