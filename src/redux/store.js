import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import campersReducer from "./campers/slice";
import filtersReducer from "./filters/slice";
import favoritesReducer from "./favorites/slice";

const persistConfig = {
  key: "favorites",
  storage,
};
const persistedFavoritesReducer = persistReducer(
  persistConfig,
  favoritesReducer
);

const store = configureStore({
  reducer: {
    campers: campersReducer,
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
