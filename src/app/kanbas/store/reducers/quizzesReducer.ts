import { createSlice } from "@reduxjs/toolkit";
import { Quiz } from "../../types";

const initialState: { quizzes: Quiz[] } = {
  quizzes: [],
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuizzes(state, action) {
      state.quizzes = action.payload;
    },
    addQuiz(state, action) {
      state.quizzes.push(action.payload);
    },
    removeQuiz(state, action) {
      const quizId = action.payload;
      state.quizzes = state.quizzes.filter((quiz) => quiz._id !== quizId);
    },
    updateQuiz(state, action) {
      const updatedQuiz = action.payload;
      state.quizzes = state.quizzes.map((quiz) =>
        quiz._id === updatedQuiz._id ? updatedQuiz : quiz
      );
    },
  },
});

export const { addQuiz, updateQuiz, setQuizzes, removeQuiz } =
  quizzesSlice.actions;
export default quizzesSlice.reducer;
