import axios from "axios";

function tokenSet(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function tokenUnset() {
  axios.defaults.headers.common.Authorization = "";
}

export { tokenSet, tokenUnset };
