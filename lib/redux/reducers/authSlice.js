import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    token: null,
    user: {
      name: "Test",
      username: "test123",
      email: "test@gmail.com",
    },
    isLoggedIn: true,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      const { _id, email, username } = action.payload;
      if (_id && email && username) {
        state.user = action.payload;
        state.isLoggedIn = true;
      }
    },
    logOutUser: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.user = null;
    },
  },
});

export const { setToken, setUser, logOutUser } = authSlice.actions;
export default authSlice.reducer;
