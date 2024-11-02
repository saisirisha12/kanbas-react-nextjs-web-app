import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../database";

const initialState = {
  assignments: db.assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment(state, action) {
      state.assignments.push(action.payload);
    },
    removeAssignment(state, action) {
      const assignmentId = action.payload;
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== assignmentId
      );
    },
    updateAssignment(state, action) {
      const updatedAssignment = action.payload;
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === updatedAssignment._id
          ? updatedAssignment
          : assignment
      );
    },
  },
});

export const { addAssignment, removeAssignment, updateAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
