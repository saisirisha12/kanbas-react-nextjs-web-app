import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../../database";

const initialState = {
  enrollments,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    addEnrollment: (state, action) => {
      state.enrollments.push(action.payload);
    },
    deleteEnrollment: (state, action) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) => enrollment._id !== action.payload
      );
    },
  },
});

export const { addEnrollment, deleteEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
