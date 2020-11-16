import { createAction } from "@reduxjs/toolkit";
const regRequest = createAction("auth/regRequest");
const regSuccses = createAction("auth/regSaccses");
const regError = createAction("auth/regError");

const logRequest = createAction("auth/logRequest");
const logSuccses = createAction("auth/logSuccses");
const logError = createAction("auth/logError");

const logoutRequest = createAction("auth/logoutRequest");
const logoutSuccses = createAction("auth/logoutSuccses");
const logoutError = createAction("auth/logoutError");

const currentUserRequest = createAction("auth/currentUserRequest");
const currentUserSuccses = createAction("auth/currentUserSuccses");
const currentUserError = createAction("auth/currentUserError");

export default {
  regRequest,
  regSuccses,
  regError,
  logRequest,
  logSuccses,
  logError,
  logoutRequest,
  logoutSuccses,
  logoutError,
  currentUserRequest,
  currentUserSuccses,
  currentUserError,
};
