import React, { useState } from "react";
import PropTypes from "prop-types";

import validator from "email-validator";

import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faUser,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

import Me from "./Me";

import { sendEmail } from "../../redux/actions/contact";

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

const loginIconButtonStyle = makeStyles({
  root: {
    color: "rgb(0, 145, 255)",
    border: "1px solid green",
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

const textFieldStyle = {
  height: "20px",
  width: "230px",
};

const Contact = ({
  // Redux State
  contact: { emailLoading, emailError, emailSuccess, emailMessage },
  // Redux Actions
  sendEmail,
}) => {
  const CHARACTER_LIMIT = 144;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    message: "Hi!",
  });

  const iconButtonStyle = loginIconButtonStyle();

  const [messageEmptyError, setMessageEmptyError] = useState(false);
  const [nameEmptyError, setNameEmptyError] = useState(false);
  const [emailEmptyError, setEmailEmptyError] = useState(false);
  const [emailInvalidError, setEmailInvalidError] = useState(false);

  const { name, email, organisation, message } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (name.length === 0) {
      setNameEmptyError(true);
      setTimeout(() => setNameEmptyError(false), 3000);
    } else if (email.length === 0) {
      setEmailEmptyError(true);
      setTimeout(() => setEmailEmptyError(false), 3000);
    } else if (message.length === 0) {
      setMessageEmptyError(true);
      setTimeout(() => setMessageEmptyError(false), 3000);
    } else if (!validator.validate(email)) {
      setEmailInvalidError(true);
      setTimeout(() => setEmailInvalidError(false), 3000);
    } else {
      sendEmail(name, email, organisation, message);
    }
  };

  return (
    <>
      <div className='app'>
        <div
          className='contact'
          data-aos='fade-in'
        >
          <div className='title flex_middle' data-aos='flip-up'>
            <div style={{ marginRight: "0.5em" }}>
              <FontAwesomeIcon icon={faMobileAlt} />
            </div>
            <div>Contact</div>
          </div>
          <div className='body'>
            <div className='form'>
              <div className='app title'>
                <div className='first ft-bold flex_middle'>Get in touch!</div>
              </div>
              <div className='app'>
                {!messageEmptyError &&
                  !emailEmptyError &&
                  !nameEmptyError &&
                  !emailInvalidError && (
                    <div
                      className='errors'
                      style={{ backgroundColor: "white" }}
                    >
                      .
                    </div>
                  )}
                {messageEmptyError && (
                  <div className='errors'>Message cannot be empty</div>
                )}
                {emailEmptyError && (
                  <div className='errors'>Email cannot be empty</div>
                )}
                {nameEmptyError && (
                  <div className='errors'>Name cannot be empty</div>
                )}
                {emailInvalidError && (
                  <div className='errors'>Email is invalid.</div>
                )}
              </div>
              <div style={{ paddingBottom: "1em" }} className='app'>
                <div style={{ marginBottom: "1.3em" }}>
                  <CssTextField
                    error={nameEmptyError}
                    label='Full Name'
                    placeholder='Full Name'
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
                    name='name'
                    value={name}
                    onChange={onChange}
                    required
                  />
                </div>
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
                <div style={{ marginBottom: "1.3em" }}>
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
                    name='organisation'
                    value={organisation}
                    onChange={onChange}
                  />
                </div>
                <div style={{ marginBottom: "1.3em" }}>
                  <CssTextField
                    multiline
                    label='Message'
                    placeholder='Message'
                    size='small'
                    focusColor='rgb(0, 145, 255)'
                    InputLabelProps={{
                      style: textFieldInputLabelStyle,
                    }}
                    inputProps={{
                      style: {
                        width: "230px",
                      },
                      maxLength: CHARACTER_LIMIT,
                    }}
                    FormHelperTextProps={{
                      style: {
                        margin: 0,
                        padding: "0 0 0 5px",
                        fontSize: 10,
                      },
                    }}
                    error={
                      message.length > CHARACTER_LIMIT - 1 || messageEmptyError
                    }
                    helperText={
                      !(message.length > CHARACTER_LIMIT - 1)
                        ? `${message.length}/${CHARACTER_LIMIT}`
                        : "Max length exceeded"
                    }
                    name='message'
                    value={message}
                    onChange={onChange}
                    required
                  />
                </div>
                <div>
                  <LoadingButton
                    size='small'
                    loading={emailLoading}
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
          </div>
        </div>
        <div className='card-contact' data-aos='fade-up'>
          <div className='title flex_middle'>Details</div>
          <div className='info'>
            <div className='title'>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div style={{ fontSize: "0.85em" }}>aunsh.sb@gmail.com</div>
          </div>
          <div className='info'>
            <div className='title'>
              <FontAwesomeIcon icon={faMobileAlt} />
            </div>
            <div style={{ fontSize: "0.85em" }}>+91 79721 46825</div>
          </div>
          <div className='info'>
            <div className='title'>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div style={{ fontSize: "0.85em" }} className='flex_left'>
              Aunsh Bandivadekar
            </div>
          </div>
        </div>
      </div>
      <div>
        <Me
          error={emailError}
          success={emailSuccess}
          message={emailMessage}
          loading={emailLoading}
        />
      </div>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  sendEmail: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contact: state.contact,
});

const mapActionsToProps = {
  sendEmail,
};

export default connect(mapStateToProps, mapActionsToProps)(Contact);
