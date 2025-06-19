import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  token:''
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    userData: (state,reqData) => {

        let {payload}=reqData
        state.user=payload.user
    },

    logOut: (state) => {

        state.user=null
     
    },
   
  },
});

export const { userData, logOut} = loginSlice.actions;
export default loginSlice.reducer;