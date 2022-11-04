import { initialState, sliceName } from "./constants";
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidV4 } from "uuid";

export const cartSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const product = state.cart.filter(
        (item) => item.id === action.payload.id
      )[0];

      const cartItems = state.cart;
      if (product === undefined) {
        state.cart = [
          ...cartItems,
          {
            ...action.payload,
            quantity: 1,
            cartItemId: uuidV4(),
          },
        ];
      } else {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: product.quantity && item.quantity + 1,
              }
            : item
        );
      }
    },
    decreaseItemQuantity: (state, action) => {
      const product = action.payload;
      if (product.quantity === 1) {
        const remainingItems = (cart, product) =>
          cart.filter((item) => item.id !== product.id);
        state.cart = remainingItems(state.cart, action.payload);
      } else {
        state.cart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    },
    increaseItemQuantity: (state, action) => {
      const payload = state.cart.find((el) => el.id === action.payload);
      state.cart = state.cart.map((item) =>
        item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    },
    deleteItemToCart: (state, action) => {
      const remainingItems = (cartItems, product) =>
        cartItems.filter((cartItem) => cartItem.id !== product.id);
      state.cart = remainingItems(state.cart, action.payload);
    },
    deleteAllItemToCart: (state, action) => {
      state.cart = state.cart.filter((item) => {
        return false;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addItemToCart,
  decreaseItemQuantity,
  increaseItemQuantity,
  deleteItemToCart,
  deleteAllItemToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
