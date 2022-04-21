import Page from "../components/ui/Page";
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";
import FilterCards from "../components/meetups/FilterCards";
import styles from "./Favorites.module.css";

function FavoritesPage(props) {
  const favoritesCtx = useContext(FavoritesContext);

  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>Il n'y a pas de favoris. Commencer à en ajouter un ?</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} cardView={props.cardView} darkMode={props.darkMode} />;
  }

  return (
    <section>
      <Page>
        <h2 className={styles.pageTitle}>Page des favoris</h2>
        <FilterCards darkMode={props.darkMode} />
        {content}
      </Page>
    </section>
  );
}

export default FavoritesPage;
