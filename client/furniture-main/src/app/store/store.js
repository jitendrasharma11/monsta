import { configureStore } from '@reduxjs/toolkit'
import  loginSlice  from '../slice/userSlice'



export const store = configureStore({
  reducer: {
    login: loginSlice,
  },
})