import { initialState, sliceName } from "./constants";
import { createSlice } from "@reduxjs/toolkit";
import { productsAPI } from "./api";

export const productSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    getProducts: (state, { payload }) => {
      state.products = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      productsAPI.endpoints.getProducts.matchFulfilled,
      (state, { payload }) => {
        state.products = payload.data;
      }
    );
  },
});

// Action creators are generated for each case reducer function
export const { getProducts } = productSlice.actions;

export default productSlice.reducer;
