import React, { useState } from "react";
import PropTypes from "prop-types";

import Navbar from "../../navbar/Navbar";

import LoadingButton from "@mui/lab/LoadingButton";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

import { blogCheckAuth } from "../../../../redux/actions/blog";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Alerts from "../../../layout/Alerts";
import MetaTags from "../../../layout/MetaTags";

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

const textFieldInputLabelStyleDark = {
  fontSize: "0.9em",
  alignSelf: "center",
  justifySelf: "center",
  color: "gray",
};

const CheckAuth = ({
  // Redux Actions
  blogCheckAuth,
  // Redux State
  settings: { displayMode },
  auth: { isAuthenticated, errorSnackbar },
  blog: { blogAuthLoading, isBlogCheckAuth },
}) => {
  const [formData, setFormData] = useState({
    password: "",
    showPassword: false,
  });

  const iconButtonStyle = loginIconButtonStyle();

  const [passwordEmptyError, setPasswordEmptyError] = useState(false);

  const { password, showPassword } = formData;

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

    if (password.length === 0) {
      setPasswordEmptyError(true);
      setTimeout(() => setPasswordEmptyError(false), 3000);
    } else {
      blogCheckAuth(password);
    }
  };

  if (isBlogCheckAuth) {
    return <Redirect to='/admin/blog' />;
  }

  return (
    <>
      <MetaTags
        title={
          <title>Blog Auth - Aunsh &middot; Admin &middot; Portfolio</title>
        }
      />
      <Navbar />
      <div className='flex_middle' style={{ height: "100%", width: "100%" }}>
        <div className='login flex_middle'>
          <div className='flex_middle'>
            {displayMode ? (
              <div className={"form form--dark"}>
                <div className='app title'>
                  <div className='first ft-bold flex_middle'>
                    Blog Auth Check
                  </div>
                </div>
                <div className='app'>
                  {!passwordEmptyError && <div className='errors-one'>.</div>}
                  {passwordEmptyError && (
                    <div className='errors'>Name cannot be empty</div>
                  )}
                </div>
                <div className='app'>
                  <div
                    style={{ margin: "0 0.5em 1em 0.5em", textAlign: "center" }}
                  >
                    In order to see your blog, enter the secret key.
                  </div>
                  <div>
                    <CssTextFieldDark
                      error={passwordEmptyError || errorSnackbar}
                      label='Secret Key'
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
                                    color: "grey",
                                  }}
                                />
                              ) : (
                                <VisibilityOff
                                  style={{
                                    fontSize: 18,
                                    color: "grey",
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
                      loading={blogAuthLoading}
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
                        Enter
                      </div>
                    </LoadingButton>
                  </div>
                </div>
              </div>
            ) : (
              <div className='form'>
                <div className='app title'>
                  <div className='first ft-bold flex_middle'>
                    Blog Auth Check
                  </div>
                </div>
                <div className='app'>
                  {!passwordEmptyError && (
                    <div
                      className='errors'
                      style={{ backgroundColor: "white" }}
                    >
                      .
                    </div>
                  )}
                  {passwordEmptyError && (
                    <div className='errors'>Password cannot be empty</div>
                  )}
                </div>
                <div className='app'>
                  <div
                    style={{ margin: "0 0.5em 1em 0.5em", textAlign: "center" }}
                  >
                    In order to see your blog, enter the secret key.
                  </div>
                  <div>
                    <CssTextField
                      error={passwordEmptyError || errorSnackbar}
                      label='Secret Key'
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
                      loading={blogAuthLoading}
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
                        Enter
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

CheckAuth.propTypes = {
  auth: PropTypes.object.isRequired,
  blog: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  blogCheckAuth: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth, 
  blog: state.blog, 
  settings: state.settings,
});

const mapActionsToProps = {
  blogCheckAuth,
};

export default connect(mapStateToProps, mapActionsToProps)(CheckAuth);
