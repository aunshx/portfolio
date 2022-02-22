import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Spinner from "../components/layout/Spinner";

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      loading ? (
         <>
            <div className='flex_middle'>
              <div className='not-found flex_middle'>
                <Spinner />
              </div>
            </div>
          </>
      ) : (
        <>
          {isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect to='/admin/login' />
          )}
        </>
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
