import axios from "axios";
import authActions from "./authActions";
import { tokenSet, tokenUnset } from "../components-phonebook/tokenChanger";
import { notify } from "../components-phonebook/reactNotification";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const registerUser = (userInfo) => (dispatch) => {
  dispatch(authActions.regRequest());

  axios
    .post("/users/signup", userInfo)
    .then((resp) => {
      tokenSet(resp.data.token);
      dispatch(authActions.regSuccses(resp.data));
    })
    .catch((error) => {
      dispatch(authActions.regError(error));
      notify("User with the same email already exists!");
    });
};

const loginUser = (userInfo) => (dispatch) => {
  dispatch(authActions.logRequest());

  axios
    .post("/users/login", userInfo)
    .then((resp) => {
      tokenSet(resp.data.token);
      dispatch(authActions.logSuccses(resp.data));
    })
    .catch((error) => {
      dispatch(authActions.logError(error));
      notify("Invalid email or password!");
    });
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  tokenSet(persistedToken);
  dispatch(authActions.currentUserRequest());

  axios
    .get("/users/current")
    .then(({ data }) => dispatch(authActions.currentUserSuccses(data)))
    .catch((error) => dispatch(authActions.currentUserError(error)));
};

const logOutUser = () => (dispatch) => {
  dispatch(authActions.logoutRequest());
  axios
    .post("/users/logout")
    .then(() => {
      tokenUnset();
      dispatch(authActions.logoutSuccses());
    })
    .catch((error) => dispatch(authActions.logoutError(error)));
};

export default {
  registerUser,
  loginUser,
  getCurrentUser,
  logOutUser,
};
