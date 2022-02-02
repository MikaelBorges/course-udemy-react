import "./App.css";
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

  const [cardViewButton, setCardViewButton] = useState(false);

  function cardViewToggle() {
    setCardViewButton(!cardViewButton);
  }

  return (
    <Layout meetupsLength={totalMeetups}>
      <Switch>
        <Route path='/' exact>
          <button onClick={cardViewToggle}>cards view</button>
          <AllMeetupsPage changeMeetups={changeStateMeetups} cardView={cardViewButton} />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <button onClick={cardViewToggle}>cards view</button>
          <FavoritesPage cardView={cardViewButton} />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
