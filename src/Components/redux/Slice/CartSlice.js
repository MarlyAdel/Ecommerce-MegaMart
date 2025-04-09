import { createSlice } from '@reduxjs/toolkit';


const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];

const initialState = {
  cartItems: savedCart,
  totalAmount: 0,
  totalQuantity: savedCart.reduce((total, item) => total + item.quantity, 0), 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...newItem, quantity: 1 });
      }


      state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
      state.totalAmount = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

      
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      localStorage.setItem('totalQuantity', state.totalQuantity.toString());
    },

    deleteItem: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);

     
      state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
      state.totalAmount = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

      
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      localStorage.setItem('totalQuantity', state.totalQuantity.toString());
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
      localStorage.removeItem('cartItems');
      localStorage.removeItem('totalQuantity');
    }
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
