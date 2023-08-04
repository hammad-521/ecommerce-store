import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { newItem, quantity } = action.payload;

      console.log(quantity);

      const existingItem = state.items.find((item) => {
        return item.id === newItem.id;
      });

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: quantity,
          totalPrice: newItem.price * quantity,
          img: newItem.thumbnail,
        });
      } else {
        if (quantity && quantity !== 1) {
          console.log("this should runs");

          console.log(newItem.price * existingItem.quantity + quantity);
          existingItem.totalPrice =
            newItem.price * existingItem.quantity + quantity;
          existingItem.quantity += quantity;
        } else {
          existingItem.quantity++;
          existingItem.totalPrice += newItem.price;
        }
      }

      state.totalPrice = state.items.reduce(
        (acc, curr) => (acc += curr.totalPrice),
        0
      );
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        state.items = state.items.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
                totalPrice: item.price * --item.quantity,
              }
            : item
        );
      }

      state.totalPrice = state.items.reduce(
        (acc, curr) => (acc += curr.totalPrice),
        0
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
