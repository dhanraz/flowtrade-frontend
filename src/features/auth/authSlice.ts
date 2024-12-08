import { createSlice } from "@reduxjs/toolkit";
const initialSigninState = {};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialSigninState,
  reducers: {
    signin : (state, action) =>{},
    signup :(state, action) =>{}
  }
})

export const{signin, signup} = authSlice.actions;
export default authSlice.reducer;
