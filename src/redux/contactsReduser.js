import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactActions from "../redux/contactActions";

const contact = createReducer([], {
  [contactActions.fetchTaskSuccses]: (state, { payload }) => payload,
  [contactActions.createTaskSuccses]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [contactActions.removeTaskSuccses]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [contactActions.changeFilter]: (state, { payload }) => payload,
});

const loading = createReducer(false, {
  [contactActions.createTaskRequest]: () => true,
  [contactActions.createTaskSuccses]: () => false,
  [contactActions.fetchTaskRequest]: () => true,
  [contactActions.fetchTaskSuccses]: () => false,
  [contactActions.removeTaskRequest]: () => true,
  [contactActions.removeTaskSuccses]: () => false,
});

const error = createReducer([], {
  [contactActions.clearTaskError]: (state, { payload }) => [],
  [contactActions.createTaskErorr]: (state, { payload }) =>
    payload.response.data.message,
});

export default combineReducers({
  contact,
  filter,
  loading,
  error,
});
