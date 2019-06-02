import React from "react";
import { Redirect, Route } from "react-router-dom";

const ConnectedRoute = ({ component: Component, loading, ...rest }) => {
  const isConnected = Boolean(localStorage.getItem("dmcatoken"));
  return (
    <Route
      {...rest}
      render={props =>
        loading ? (
          <p>Chargement...</p>
        ) : isConnected ? (
          <Component history={props.history} {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth/login",
              state: { next: props.location }
            }}
          />
        )
      }
    />
  );
};

export default ConnectedRoute;
