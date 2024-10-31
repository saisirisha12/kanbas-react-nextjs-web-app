import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../database";

const initialState = {
  courses: db.courses,
  course: {
    _id: 0,
    number: "",
    name: "",
    startDate: "",
    endDate: "",
    department: "",
    credits: 0,
    description: "",
  },
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state) => {
      const newCourse = {
        ...state.course,
        _id: state.courses[state.courses.length - 1]._id + 1,
      };
      state.courses = [...state.courses, { ...state.course, ...newCourse }];
    },
    deleteCourse: (state, action) => {
      state.courses = state.courses.filter(
        (course) => course._id !== action.payload
      );
    },
    updateCourse: (state) => {
      state.courses = state.courses.map((c) =>
        c._id === state.course._id ? state.course : c
      );
    },
    setCourse: (state, action) => {
      state.course = action.payload;
    },
  },
});

export const { addCourse, deleteCourse, updateCourse, setCourse } =
  coursesSlice.actions;
export default coursesSlice.reducer;
