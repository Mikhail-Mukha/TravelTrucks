export const selectFavorites = (state) => state.favorites.favorites;
export const isFavorite = (state, id) =>
  state.favorites.favorites.some((item) => item.id === id);
