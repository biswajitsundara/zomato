import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    restaurantName:'',
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      //mutating the state here
      state.items.push(action.payload);
    },
    setRestaurantName: (state, action) => {
       state.restaurantName = action.payload
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
      state.restaurantName = '';
    },
  },
});

export const { addItem, setRestaurantName, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
//console.log(cartSlice.reducer);
