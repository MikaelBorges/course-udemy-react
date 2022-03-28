import styles from './App.module.css';
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
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
  const [themeViewButton, setThemeCardViewButton] = useState(true);

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
