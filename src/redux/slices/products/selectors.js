import { createSelector } from "reselect";

const get = (state) => state.products;
export const productsState = createSelector(
  get,
  (productsSlice) => productsSlice.products
);
