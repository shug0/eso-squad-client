import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { userFormValidationSchema } from '../../forms/schemas'
import { getCookieUser } from '../../helpers/user'

const checkUserCookies = () => userFormValidationSchema.isValidSync(getCookieUser())

function PrivateRoute ({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        checkUserCookies() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/setup',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
