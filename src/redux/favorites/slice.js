import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, action) {
      const camper = action.payload;
      if (!state.favorites.find((item) => item.id === camper.id)) {
        state.favorites.push(camper);
      }
    },
    removeFromFavorites(state, action) {
      const camperId = action.payload;
      state.favorites = state.favorites.filter((item) => item.id !== camperId);
    },
    resetFavorites(state) {
      state.favorites = [];
    },
  },
});

export const { addToFavorites, removeFromFavorites, resetFavorites } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
