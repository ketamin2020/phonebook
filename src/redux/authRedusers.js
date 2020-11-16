import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import authActions from "./authActions";

const UserState = { name: null, email: null };

const user = createReducer(UserState, {
  [authActions.regSuccses]: (state, { payload }) => payload.user,
  [authActions.logSuccses]: (state, { payload }) => payload.user,
  [authActions.logoutSuccses]: () => UserState,
  [authActions.currentUserSuccses]: (state, { payload }) => payload,
});

const token = createReducer(null, {
  [authActions.regSuccses]: (state, { payload }) => payload.token,
  [authActions.logSuccses]: (state, { payload }) => payload.token,
  [authActions.logoutSuccses]: () => null,
});

const error = createReducer(null, {
  [authActions.regError]: (state, { payload }) => payload,
  [authActions.logError]: (state, { payload }) => payload,
  [authActions.logoutError]: (state, { payload }) => payload,
  [authActions.currentUserError]: (state, { payload }) => payload,
});

export default combineReducers({
  user,
  token,
  error,
});
