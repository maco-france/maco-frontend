import { createSelector } from "reselect";

const get = (state) => state.cart;
export const cartState = createSelector(get, (cart) => cart);
