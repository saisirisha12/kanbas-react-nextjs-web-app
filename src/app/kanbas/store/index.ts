import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./reducers/coursesReducer";
import modulesReducer from "./reducers/modulesReducer";
import accountReducer from "./reducers/accountReducer";
import assignmentsReducer from "./reducers/assignmentsReducer";
import enrollmentsReducer from "./reducers/enrollmentsReducer";

const store = configureStore({
  reducer: {
    accountReducer,
    assignmentsReducer,
    coursesReducer,
    enrollmentsReducer,
    modulesReducer,
  },
});

export default store;
