import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   status: false,
   userData: null,
};

const userAuthSlice = createSlice({
   name: 'userAuth',
   initialState,
   reducers: {
      login(state, action) {
         state.status = true;
         state.userData = action.payload;
      },
      logout(state) {
         state.status = false;
         state.userData = null;
      },
   },
});

export const { login, logout } = userAuthSlice.actions;

export default userAuthSlice.reducer;
