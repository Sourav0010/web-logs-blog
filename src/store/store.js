import { configureStore } from '@reduxjs/toolkit';
import userAuthSlice from './authSlice';

const store = configureStore({
   reducer: {
      userAuth: userAuthSlice,
   },
});

export default store;
