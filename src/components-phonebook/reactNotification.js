import { store } from "react-notifications-component";

function notify(text) {
  return store.addNotification({
    title: "Error!",
    message: `${text}`,
    type: "danger",
    insert: "bottom",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: false,
      showIcon: true,
    },
  });
}
export { notify };
