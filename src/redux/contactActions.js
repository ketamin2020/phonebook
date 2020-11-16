// import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const createTaskRequest = createAction("contact/TaskRequest");
const createTaskSuccses = createAction("contact/TaskSuccses");

const createTaskErorr = createAction("contact/TaskError");
const clearTaskError = createAction("contact/clearError");

const fetchTaskRequest = createAction("contact/fetchTaskRequest");
const fetchTaskSuccses = createAction("contact/fetchTaskSuccses");
const fetchTaskErorr = createAction("contact/fetchTaskError");

const removeTaskRequest = createAction("contact/removeTaskRequest");
const removeTaskSuccses = createAction("contact/removeTaskSuccses");
const removeTaskErorr = createAction("contact/removeTaskError");

const changeFilter = createAction("contact/filter");
const isNotification = createAction("contact/notification");

export default {
  removeTaskRequest,
  removeTaskSuccses,
  removeTaskErorr,
  createTaskRequest,
  createTaskSuccses,
  createTaskErorr,
  fetchTaskRequest,
  fetchTaskSuccses,
  fetchTaskErorr,
  changeFilter,
  isNotification,
  clearTaskError,
};
