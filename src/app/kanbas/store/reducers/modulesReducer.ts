import { createSlice } from "@reduxjs/toolkit";
import { modules } from "../../database";

const initialState = {
  modules,
  module: {
    _id: "",
    name: "",
    course: "",
    lessons: [],
    editing: false,
  },
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModule(state, action) {
      state.module = action.payload;
    },
    addModule(state, action) {
      state.modules.push(action.payload);
      state.module = initialState.module;
    },
    editModule(state, action) {
      state.modules = state.modules.map((module) =>
        module._id === action.payload ? { ...module, editing: true } : module
      );
    },
    updateModule(state, action) {
      const index = state.modules.findIndex(
        (module) => module._id === action.payload._id
      );
      state.modules[index] = action.payload;
    },
    deleteModule(state, action) {
      state.modules = state.modules.filter(
        (module) => module._id !== action.payload
      );
    },
  },
});

export const { setModule, addModule, editModule, updateModule, deleteModule } =
  modulesSlice.actions;
export default modulesSlice.reducer;