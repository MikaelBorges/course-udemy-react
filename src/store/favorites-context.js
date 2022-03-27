import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {

  // const [userFavorites, setUserFavorites] = useState([]);

  const [userFavorites, setUserFavorites] = useState([{
    address: "",
    description: "",
    id: "-Mz5NYEsW3ffpOvWZBkO",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/31/Saint_Andr%C3%A9_Lez_Lille.jpg",
    title: "Saint-André-lez-Lille",
  }]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites( prevUserFavorites => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites( prevUserFavorites => {
      return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some(meetup => meetup.id === meetupId)
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };


  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;