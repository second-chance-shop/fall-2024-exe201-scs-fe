import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
  }
  
  export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserProfile : (state, action) => {
            state.user = action.payload;
        },
        clearUserProfile : (state) => {
            state.user = null;
          },
    }
  })
  
  export const { setUserProfile, clearUserProfile } = userSlice.actions
  
  export default userSlice.reducer