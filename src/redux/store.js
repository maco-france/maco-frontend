import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunkMiddleware from "redux-thunk";
import rootReducer, { persistedMiddleware } from "./reducers/rootReducer";

const persistConfig = {
  key: "primary",
  storage,
  blacklist: ["products", "productsAPI"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export function initializeStore() {
  return configureStore({
    reducer: persistedReducer,
    middleware: persistedMiddleware,
    devTools: composeWithDevTools(applyMiddleware(thunkMiddleware)),
  });
}
