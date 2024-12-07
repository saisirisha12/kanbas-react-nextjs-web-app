import { createSlice } from "@reduxjs/toolkit";
import { Question } from "../../types";

const initialState: { questions: Question[] } = {
  questions: [],
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions(state, action) {
      state.questions = action.payload;
    },
    addQuestion(state, action) {
      state.questions.push(action.payload);
    },
    removeQuestion(state, action) {
      const questionId = action.payload;
      state.questions = state.questions.filter(
        (question) => question._id !== questionId
      );
    },
    updateQuestion(state, action) {
      const updatedQuestion = action.payload;
      state.questions = state.questions.map((question) =>
        question._id === updatedQuestion._id ? updatedQuestion : question
      );
    },
  },
});

export const { addQuestion, updateQuestion, setQuestions, removeQuestion } =
  questionsSlice.actions;

export default questionsSlice.reducer;
