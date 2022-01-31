import "./App.css";
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {

  const [totalMeetups, setTotalMeetups] = useState(0);

  function changeStateMeetups(meetups) {
    setTotalMeetups(meetups);
  }

  return (
    <Layout meetupsLength={totalMeetups}>
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage changeMeetups={changeStateMeetups} />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
