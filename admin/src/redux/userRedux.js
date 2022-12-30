import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //GET USERS
    getUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getUserSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    getUserFailure: (state) => {
      state.isFetching = false;
      state.currentUser = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },

    //DELETE USERS
    deleteUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    deleteUserSuccess: (state, action) => {
      state.isFetching = false;
      state.user.splice(
        state.currentUser.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteUserFailure: (state) => {
      state.isFetching = false;
      state.currentUser = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, getUserFailure, getUserSuccess, getUserStart, deleteUserFailure, deleteUserStart, deleteUserSuccess } = userSlice.actions;
export default userSlice.reducer;
