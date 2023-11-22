import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // If the item is already in the store we need to increase the quantity
      // If the item is already in the store we need to add item
      // action.payload is the item we pass to the cart
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        // increment the quantity
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct && existingProduct.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else if (existingProduct) {
        existingProduct.quantity -= 1;
      }
    },
  },
});
