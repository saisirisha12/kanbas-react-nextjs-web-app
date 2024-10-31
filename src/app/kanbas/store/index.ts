import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./reducers/coursesReducer";
import modulesReducer from "./reducers/modulesReducer";
import accountReducer from "./reducers/accountReducer";

const store = configureStore({
  reducer: { accountReducer, coursesReducer, modulesReducer },
});

export default store;
