import Page from "../components/ui/Page";
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";
import FilterCards from "../components/meetups/FilterCards";

function FavoritesPage(props) {
  const favoritesCtx = useContext(FavoritesContext);

  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some ?</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} cardView={props.cardView} darkMode={props.darkMode} />;
  }

  return (
    <section>
      <Page>
        <h2>My Favorites Page</h2>
        <FilterCards />
        {content}
      </Page>
    </section>
  );
}

export default FavoritesPage;
