import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      // check if product is in cart first
      const existingIndex = state.products.findIndex(
        (product) => product.title === action.payload.title
      );
      if (existingIndex === -1) {
        state.products.push(action.payload);
      } else {
        const oldProduct = state.products[existingIndex];
        state.products[existingIndex] = {
          ...oldProduct,
          quantity: oldProduct.quantity + 1,
        };
      }
    },
    removeProduct: (state, action) => {
      // check if product is in cart first
      const existingIndex = state.products.findIndex(
        (product) => product.title === action.payload.title
      );
      if (existingIndex === -1) {
        return state;
      } else {
        state.products.splice(existingIndex, 1);
      }
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
