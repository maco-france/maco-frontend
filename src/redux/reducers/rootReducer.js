import wishlistReducer from "./wishlistReducer";
import compareReducer from "./compareReducer";
import { combineReducers } from "redux";
import { productsAPI } from "../slices/products/api";
import thunkMiddleware from "redux-thunk";
import { cartSlice } from "../slices/cart/slice";
import { productSlice } from "../slices/products/slice";

const rootReducer = combineReducers({
  wishlistData: wishlistReducer,
  compareData: compareReducer,
  [productsAPI.reducerPath]: productsAPI.reducer,
  [cartSlice.name]: cartSlice.reducer,
  [productSlice.name]: productSlice.reducer,
});

export const persistedMiddleware = (gdm) =>
  gdm({
    serializableCheck: false,
  }).concat(productsAPI.middleware, thunkMiddleware);

export default rootReducer;
