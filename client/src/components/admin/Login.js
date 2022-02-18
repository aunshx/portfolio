import React, { useState } from 'react'
import PropTypes from 'prop-types'
import validator from "email-validator";

import Navbar from './navbar/Navbar'


import LoadingButton from "@mui/lab/LoadingButton";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

import { login } from "../../redux/actions/auth";

import windowSize from "../../utils/windowSize";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Alerts from '../layout/Alerts';

const CssTextField = styled(TextField, {
  shouldForwardProp: (props) => props !== "focusColor",
})((p) => ({
  // input label when focused
  "& label.Mui-focused": {
    color: "rgb(0, 145, 255)",
  },
  // focused color for input with variant='outlined'
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "rgb(0, 145, 255)",
      fontSize: "0.9em",
    },
  },
}));

const CssTextFieldDark = styled(TextField, {
  shouldForwardProp: (props) => props !== "focusColor",
})((p) => ({
  // input label when focused
  "& label.Mui-focused": {
    color: "rgb(0, 145, 255)",
  },
  // focused color for input with variant='outlined'
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "rgb(0, 145, 255)",
      fontSize: "0.9em",
    },
    "& fieldset": {
      borderColor: "rgb(220, 220, 220)",
    },
    "&:hover fieldset": {
      borderColor: "rgb(220, 220, 220)",
    },
    color: "white",
  },
}));

const loginIconButtonStyle = makeStyles({
  root: {
    color: "rgb(0, 145, 255)",
    backgroundColor: "none",
    fontSize: "10px",
    height: "27px",
    "&:hover": {
      backgroundColor: "transparent",
      color: "rgb(0, 145, 255)",
      border: "1px solid rgb(0, 145, 255)",
    },
  },
});

const textFieldInputLabelStyle = {
  fontSize: "0.9em",
  alignSelf: "center",
  justifySelf: "center",
};

const textFieldInputLabelStyleDark = {
  fontSize: "0.9em",
  alignSelf: "center",
  justifySelf: "center",
  color: "gray",
};

const textFieldStyle = {
  height: "20px",
  width: "230px",
};
 

const Login = ({
  // Redux Actions
  login,
  // Redux State
  settings: { displayMode },
  auth: { isAuthenticated, loginLoading, errorSnackbar },
}) => {

  const [formData, setFormData] = useState({
    password: "",
    email: "",
    showPassword: false,
  });

  const iconButtonStyle = loginIconButtonStyle();

  const [passwordEmptyError, setPasswordEmptyError] = useState(false);
  const [emailEmptyError, setEmailEmptyError] = useState(false);
  const [emailInvalidError, setEmailInvalidError] = useState(false);

  const { password, email, showPassword } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleClickShowPassword = () => {
    setFormData({
      ...formData,
      showPassword: !showPassword,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (email.length === 0) {
      setEmailEmptyError(true);
      setTimeout(() => setEmailEmptyError(false), 3000);
    } else if (!validator.validate(email)) {
      setEmailInvalidError(true);
      setTimeout(() => setEmailInvalidError(false), 3000);
    } else if (password.length === 0) {
      setPasswordEmptyError(true);
      setTimeout(() => setPasswordEmptyError(false), 3000);
    } else {
      login(email, password);
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/admin' />;
  }

  return (
    <>
      <Navbar />
      <div className='flex_middle'>
        <div className='login flex_middle'>
          <div className='flex_middle'>
            {displayMode ? (
              <div className={"form form--dark"} data-aos='fade-up'>
                <div className='app title'>
                  <div className='first ft-bold flex_middle'>Login</div>
                </div>
                <div className='app'>
                  {!emailEmptyError &&
                    !passwordEmptyError &&
                    !emailInvalidError && <div className='errors-one'>.</div>}
                  {emailEmptyError && (
                    <div className='errors'>Email cannot be empty</div>
                  )}
                  {passwordEmptyError && (
                    <div className='errors'>Name cannot be empty</div>
                  )}
                  {emailInvalidError && (
                    <div className='errors'>Email is invalid.</div>
                  )}
                </div>
                <div style={{ paddingBottom: "1em" }} className='app'>
                  <div style={{ marginBottom: "1.3em" }}>
                    <CssTextFieldDark
                      error={emailEmptyError || emailInvalidError}
                      label='Email ID'
                      placeholder='Email ID'
                      size='small'
                      focusColor='rgb(0, 145, 255)'
                      InputLabelProps={{
                        style: textFieldInputLabelStyleDark,
                      }}
                      inputProps={{
                        style: textFieldStyle,
                      }}
                      FormHelperTextProps={{
                        style: {
                          margin: 0,
                          padding: "0 0 0 5px",
                          fontSize: 10,
                        },
                      }}
                      name='email'
                      value={email}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div>
                    <CssTextFieldDark
                      error={passwordEmptyError || errorSnackbar}
                      label='Password'
                      size='small'
                      variant='outlined'
                      type={showPassword ? "text" : "password"}
                      InputLabelProps={{
                        style: textFieldInputLabelStyleDark,
                      }}
                      inputProps={{
                        style: {
                          height: "20px",
                          width: "186px",
                        },
                      }}
                      name='password'
                      value={password}
                      onChange={onChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton
                              aria-label='toggle password visibility'
                              onClick={handleClickShowPassword}
                            >
                              {showPassword ? (
                                <Visibility
                                  style={{
                                    fontSize: 18,
                                  }}
                                />
                              ) : (
                                <VisibilityOff
                                  style={{
                                    fontSize: 18,
                                  }}
                                />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  <div style={{ marginTop: "1.5em" }}>
                    <LoadingButton
                      size='small'
                      loading={loginLoading}
                      loadingPosition='end'
                      endIcon={
                        <ArrowForwardIosIcon
                          style={{
                            fontSize: 12,
                            color: "rgb(0, 145, 255)",
                          }}
                        />
                      }
                      variant='outlined'
                      onClick={onSubmit}
                      className={iconButtonStyle.root}
                    >
                      <div
                        style={{
                          margin: "0em 0.5em 0em 0em",
                          color: "rgb(0, 145, 255)",
                        }}
                      >
                        Send
                      </div>
                    </LoadingButton>
                  </div>
                </div>
              </div>
            ) : (
              <div className='form'>
                <div className='app title'>
                  <div className='first ft-bold flex_middle'>Login</div>
                </div>
                <div className='app'>
                  {!passwordEmptyError &&
                    !emailEmptyError &&
                    !emailInvalidError && (
                      <div
                        className='errors'
                        style={{ backgroundColor: "white" }}
                      >
                        .
                      </div>
                    )}
                  {emailEmptyError && (
                    <div className='errors'>Email cannot be empty</div>
                  )}
                  {passwordEmptyError && (
                    <div className='errors'>Password cannot be empty</div>
                  )}
                  {emailInvalidError && (
                    <div className='errors'>Email is invalid.</div>
                  )}
                </div>
                <div style={{ paddingBottom: "1em" }} className='app'>
                  <div style={{ marginBottom: "1.3em" }}>
                    <CssTextField
                      error={emailEmptyError || emailInvalidError}
                      label='Email ID'
                      placeholder='Email ID'
                      size='small'
                      focusColor='rgb(0, 145, 255)'
                      InputLabelProps={{
                        style: textFieldInputLabelStyle,
                      }}
                      inputProps={{
                        style: textFieldStyle,
                      }}
                      FormHelperTextProps={{
                        style: {
                          margin: 0,
                          padding: "0 0 0 5px",
                          fontSize: 10,
                        },
                      }}
                      name='email'
                      value={email}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div>
                    <CssTextField
                      label='Organization'
                      placeholder='Organization'
                      size='small'
                      focusColor='rgb(0, 145, 255)'
                      InputLabelProps={{
                        style: textFieldInputLabelStyle,
                      }}
                      inputProps={{
                        style: textFieldStyle,
                      }}
                      FormHelperTextProps={{
                        style: {
                          margin: 0,
                          padding: "0 0 0 5px",
                          fontSize: 10,
                        },
                      }}
                      name='password'
                      value={password}
                      onChange={onChange}
                    />
                  </div>
                  <div style={{ marginTop: "1.5em" }}>
                    <LoadingButton
                      size='small'
                      loading={loginLoading}
                      loadingPosition='end'
                      endIcon={
                        <ArrowForwardIosIcon
                          style={{
                            fontSize: 12,
                            color: "rgb(0, 145, 255)",
                          }}
                        />
                      }
                      variant='outlined'
                      onClick={onSubmit}
                      className={iconButtonStyle.root}
                    >
                      <div
                        style={{
                          margin: "0em 0.5em 0em 0em",
                          color: "rgb(0, 145, 255)",
                        }}
                      >
                        Send
                      </div>
                    </LoadingButton>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
            <Alerts />
        </div>
      </div>
    </>
  );
};

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  settings: state.settings,
});

const mapActionsToProps = {
  login,
};

export default connect(mapStateToProps, mapActionsToProps)(Login);
