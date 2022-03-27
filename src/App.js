import styles from './App.module.css';
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  const [totalMeetups, setTotalMeetups] = useState(0);

  function changeStateMeetups(meetupsNumber) {
    setTotalMeetups(meetupsNumber);
  }

  const [cardViewButton, setCardViewButton] = useState(true);
  const [themeViewButton, setThemeCardViewButton] = useState(true);

  function cardViewToggle() {
    setCardViewButton(!cardViewButton);
  }

  function themeViewToggle() {
    setThemeCardViewButton(!themeViewButton);
    
  }

  return (
    <Layout meetupsLength={totalMeetups} darkMode={themeViewButton}>
      <Switch>
        <Route path='/' exact>
          <button
            className={`${styles.toggleButton} ${styles.toggleCardView} ${
              themeViewButton ? styles.darkMode : ""
            }`}
            onClick={cardViewToggle}
          >
            {cardViewButton ? '🏞' : '🪪'}
          </button>
          <AllMeetupsPage changeMeetups={changeStateMeetups} cardView={cardViewButton} darkMode={themeViewButton} />
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
          <NewMeetupPage darkMode={themeViewButton} />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage cardView={cardViewButton} darkMode={themeViewButton} />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
