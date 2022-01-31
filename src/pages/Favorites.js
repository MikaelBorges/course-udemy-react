import Page from "../components/ui/Page";
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";


function FavoritesPage() {

  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some ?</p>
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />
  }

  return (
    <section>
      <Page>
        <h1>My Favorites</h1>
        {content}
      </Page>
    </section>
  );
}

export default FavoritesPage;