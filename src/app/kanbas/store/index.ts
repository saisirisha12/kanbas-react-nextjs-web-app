import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./reducers/coursesReducer";
import modulesReducer from "./reducers/modulesReducer";
import accountReducer from "./reducers/accountReducer";
import assignmentsReducer from "./reducers/assignmentsReducer";

const store = configureStore({
  reducer: {
    accountReducer,
    assignmentsReducer,
    coursesReducer,
    modulesReducer,
  },
});

export default store;
