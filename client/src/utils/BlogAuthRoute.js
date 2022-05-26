import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Spinner from "../components/layout/Spinner";

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  blog: { isBlogCheckAuth },
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
            <>
              {isBlogCheckAuth ? (
                <Component {...props} />
              ) : (
                <Redirect to='/' />
              )}
            </>
          ) : (
            <Redirect to='/login' />
          )}
        </>
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
  blog: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  blog: state.blog,
});

export default connect(mapStateToProps)(PrivateRoute);
