import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../database";

const initialState = {
  users: db.users,
  currentUser: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    addNewUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { setCurrentUser, addNewUser } = accountSlice.actions;
export default accountSlice.reducer;
