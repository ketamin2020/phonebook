import contactAction from "./contactActions";
import { notify } from "../components-phonebook/reactNotification";
import axios from "axios";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const createTask = (name, number) => (dispatch) => {
  dispatch(contactAction.createTaskRequest());
  axios
    .post("/contacts", { name, number })
    .then(({ data }) => {
      dispatch(contactAction.createTaskSuccses(data));
    })
    .catch((error) => {
      dispatch(contactAction.createTaskErorr(error));
      notify(error.response.data.message);
      dispatch(contactAction.clearTaskError());
    });
};

const fetchTask = () => (dispatch) => {
  dispatch(contactAction.fetchTaskRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(contactAction.fetchTaskSuccses(data)))
    .catch((error) => contactAction.fetchTaskErorr(error));
};

const removeTask = (id) => (dispatch) => {
  dispatch(contactAction.removeTaskRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactAction.removeTaskSuccses(id)))
    .catch(() => dispatch(contactAction.removeTaskErorr()));
};

export default {
  createTask,
  fetchTask,
  removeTask,
};
