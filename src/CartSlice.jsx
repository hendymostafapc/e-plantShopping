import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const isAdded = state.items.find(
        (item) => item.name === action.payload.name,
      );
      if (!isAdded) {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const updatedArray = state.items.filter(
        (item) => item.name !== action.payload.name,
      );
      state.items = updatedArray;
    },
    updateQuantity: (state, action) => {
      const { product, delta } = action.payload;
      const existItem = state.items.find((item) => item.name === product);
      existItem.quantity += delta;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
