import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import authSelectors from "../redux/authSelectors";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
