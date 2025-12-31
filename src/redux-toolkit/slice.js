import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const saveCart = (items) => {
  localStorage.setItem("cart", JSON.stringify(items));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((i) => i.id === item.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      saveCart(state.items);
    },

    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      saveCart(state.items);
    },

    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) item.quantity += 1;
      saveCart(state.items);
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item && item.quantity > 1) item.quantity -= 1;
      saveCart(state.items);
    },

    clearAllItems: (state) => {
      state.items = [];
      saveCart([]);
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearAllItems,
} = cartSlice.actions;

export default cartSlice.reducer;
