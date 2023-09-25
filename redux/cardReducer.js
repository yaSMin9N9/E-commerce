import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product:[],
  heart:[],
  totalPrice:0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   addToCart:(state,action)=>{
    const prod =state.product.find(item=>item.id === action.payload.id)
    !prod &&state.product.push(action.payload)
   },
   removeFromCart:(state,action)=>{
    const removedProduct = state.product.find(item => item.id === action.payload.id);
      if (removedProduct) {
        // Subtract the removed product's price from totalPrice
        state.totalPrice -= removedProduct.price;

        // Remove the product from the cart
        state.product = state.product.filter(item => item.id !== action.payload.id);
   }},
   add: (state, action) => {
    // Find the product in the cart
    state.product.find(item => item.id === action.payload.id);
    state.totalPrice += action.payload.price;
    
  },
  sub:(state, action) => {
    // Find the product in the cart
    state.product.find(item => item.id === action.payload.id);
    state.totalPrice -= action.payload.price;
    
  },
  addToheart:(state,action) =>{
    const proda =state.heart.find(item=>item.id === action.payload.id)
    !proda &&state.heart.push(action.payload)
    console.log(state.heart)
  }
}})

// Action creators are generated for each case reducer function
export const { addToCart ,removeFromCart,add,sub,addToheart} = cartSlice.actions
export default cartSlice.reducer