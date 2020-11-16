import React, { Component, Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import authOperations from "./redux/authOperations";
import authSelectors from "./redux/authSelectors";
import contactSelectors from "./redux/contactSelectors";
import { connect } from "react-redux";
import routes from "./routes";
import PrivateRoute from "./components-phonebook/PrivateRoute";
import PublicRoute from "./components-phonebook/PublicRoute";
import UserMenu from "./components-phonebook/UserMenu";
import Spinner from "./components-phonebook/Spinner";
import ReactNotification from "react-notifications-component";
import "../node_modules/react-notifications-component/dist/theme.css";
import "react-notifications-component/dist/theme.css";
import "semantic-ui-css/semantic.min.css";
class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    const { isLoading, isAuthenticated, isError } = this.props;
    return (
      <BrowserRouter>
        <ReactNotification />
        {isLoading && !isError && <Spinner />}
        {isAuthenticated && <UserMenu />}
        <Suspense fallback={null}>
          <Switch>
            {routes.map((route) =>
              route.private ? (
                <PrivateRoute key={route.label} {...route} />
              ) : (
                <PublicRoute key={route.label} {...route} />
              )
            )}
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}
const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
  isLoading: contactSelectors.isLoading(state),
  isError: contactSelectors.getError(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
