import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'

let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL
export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async () => {
    const response = await axios.post(`${apiBaseUrl}cart/view-cart`,{},{
      headers: {
        Authorization: `Bearer ${Cookies.get("TOKEN") ?? ''}`
    }
    });
    let finalData=await response.data;
    return finalData

  },
);



export const cartSlice = createSlice({
  name: 'cart',
  initialState:{
    cart: [] ,
    imagePath:'',
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    
    //state  = oldState  
   //action  = api data=> payload
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      // Add user to the state array
      state.cart=action.payload.cartData,
      state.imagePath=action.payload.staticPath
    })
  },

})

// Action creators are generated for each case reducer function
export const { cartData } = cartSlice.actions

export default cartSlice.reducer