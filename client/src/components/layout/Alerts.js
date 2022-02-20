import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import MuiAlert from "@mui/material/Alert";

function SlideTransitionLeft(props) {
  return <Slide {...props} direction='right' />;
}

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={10} ref={ref} variant='filled' {...props} />;
});

//

const Alerts = ({ auth: { message, type, key }, settings: { displayMode } }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
  };

  return (
    <>
      <Snackbar
        open={message.length > 0}
        handleClose={handleClose}
        TransitionComponent={SlideTransitionLeft}
        key={key}
      >
        <Alert severity={type} variant='filled' color={type}>
          {message.length > 0 && message}
        </Alert>
      </Snackbar>
    </>
  );
};

Alerts.propTypes = {
  auth: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  settings: state.settings,
});

export default connect(mapStateToProps)(Alerts);
