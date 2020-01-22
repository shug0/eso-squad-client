import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { userFormValidationSchema } from "../../forms/schemas";
import { getCookieUser } from "../../helpers/user";

const checkUserCookies = () =>
  userFormValidationSchema.isValidSync(getCookieUser());

interface PrivateRouteProps extends RouteProps {
  component: any;
}

function PrivateRoute({ component: Component, ...rest }: PrivateRouteProps) {
  return (
    <Route
      {...rest}
      render={props =>
        checkUserCookies() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/setup",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
