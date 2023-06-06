import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  userName: "",
  userEmail: "",
};

export const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    updateUserName: (state, action) => {
      state.userName = action.payload;
    },
    updateUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    removeUserName: (state) => {
      state.userName = "";
    },
  },
});

export const { updateUserName, updateUserEmail, removeUserName } = userSlice.actions;

export const userSliceReducer = userSlice.reducer;

export const useSelectorUserDetail = () =>
  useSelector((state) => ({
    userName: state.users.userName,
  }));
