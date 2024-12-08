import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./reducers/coursesReducer";
import modulesReducer from "./reducers/modulesReducer";
import accountReducer from "./reducers/accountReducer";
import assignmentsReducer from "./reducers/assignmentsReducer";
import enrollmentsReducer from "./reducers/enrollmentsReducer";
import quizzesReducer from "./reducers/quizzesReducer";
import questionsReducer from "./reducers/questionsReducer";

const store = configureStore({
  reducer: {
    accountReducer,
    assignmentsReducer,
    coursesReducer,
    enrollmentsReducer,
    modulesReducer,
    quizzesReducer,
    questionsReducer,
  },
});

export default store;
