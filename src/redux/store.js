import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import campersReducer from "./campers/slice";
import filtersReducer from "./filters/slice";
import favoritesReducer from "./favorites/slice";

const persistConfigCampers = {
  key: "campers",
  storage,
};
const persistedCampersReducer = persistReducer(
  persistConfigCampers,
  campersReducer
);

const persistConfigFavorites = {
  key: "favorites",
  storage,
};
const persistedFavoritesReducer = persistReducer(
  persistConfigFavorites,
  favoritesReducer
);

const store = configureStore({
  reducer: {
    campers: persistedCampersReducer,
    filters: filtersReducer,
    favorites: persistedFavoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
