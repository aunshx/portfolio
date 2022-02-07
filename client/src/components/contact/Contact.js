import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import LoadingButton from "@mui/lab/LoadingButton";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

import contactImage from '../../resources/images/contactImage.png'

const CssTextField = styled(TextField, {
  shouldForwardProp: (props) => props !== "focusColor",
})((p) => ({
  // input label when focused
  "& label.Mui-focused": {
    color: "#44af16",
  },
  // focused color for input with variant='outlined'
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#44af16",
      fontSize: "0.9em",
    },
  },
}));

const loginIconButtonStyle = makeStyles({
  root: {
    color: "gray",
    border: "1px solid green",
    backgroundColor: "none",
    fontSize: "10px",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#1686f0",
      border: "1px solid #1686f0",
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


const Contact = (props) => {

  const CHARACTER_LIMIT = 250

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
  });

  const iconButtonStyle = loginIconButtonStyle();

  const [organisationEmptyError, setorganisationEmptyError] = useState(false);
  const [nameEmptyError, setNameEmptyError] = useState(false);
  const [emailEmptyError, setEmailEmptyError] = useState(false);

  const { name, email, organisation } = formData

    const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();

    // if (name.length === 0) {
    //   setNameEmptyError(true);
    //   setTimeout(() => setNameEmptyError(false), 5000);
    // } else if (email.length === 0) {
    //   setEmailEmptyError(true);
    //   setTimeout(() => setEmailEmptyError(false), 5000);
    // } else if (password.length === 0) {
    //   setPasswordEmptyError(true);
    //   setTimeout(() => setPasswordEmptyError(false), 5000);
    // } else {
    //   register(name, email, password);
    // }
  };

  return <div className='contact'>
    <div className="title flex_middle" data-aos='flip-up'>
      <div style={{ marginRight: '0.5em' }}>
        <FontAwesomeIcon icon={faMobileAlt} />
      </div>
      <div>
        Contact
      </div>
    </div>
    <div className="body">
      <div className="image" data-aos='fade-in'>
        <img src={contactImage} alt="Contact Image" />
      </div>
      <div className="form">
            <div className='card'>
             <div className="app title">
                <div className='first ft-bold flex_middle'>Get in touch!</div>
              <div className='second'>Send me an email and I'll definitely get back to you!</div>
             </div>
              <div className='app'>
                {organisationEmptyError && (
                  <div className='errors'>Organization cannot be empty</div>
                )}
                {(emailEmptyError || emailEmptyError) && (
                  <div className='errors'>Email cannot be empty</div>
                )}
                {nameEmptyError && (
                  <div className='errors'>Name cannot be empty</div>
                )}
              </div>
              <div style={{ paddingBottom: "1em" }} className='app'>
                <div style={{ marginBottom: "1.3em" }}>
                  <CssTextField
                    error={nameEmptyError}
                    label='Full Name'
                    placeholder='Full Name'
                    size='small'
                    focusColor='#1686f0'
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
                    error={emailEmptyError}
                    label='Email ID'
                    placeholder='Email ID'
                    size='small'
                    focusColor='#1686f0'
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
                    error={organisationEmptyError}
                    label='Organization'
                    placeholder='Organization'
                    size='small'
                    focusColor='#1686f0'
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
                    required
                  />
                </div>
                <div>
                 <CssTextField
                    multiline

                    label='Organization'
                    placeholder='Organization'
                    size='small'
                    focusColor='#1686f0'
                    InputLabelProps={{
                      style: textFieldInputLabelStyle,
                    }}
                    inputProps={{
                        maxLength: CHARACTER_LIMIT,
                    }}
                    FormHelperTextProps={{
                        style: {
                            margin: 0,
                            padding: '0 0 0 5px',
                            fontSize: 10,
                        },
                    }}
                    error={
                        organisation.length >
                        CHARACTER_LIMIT - 1 || organisationEmptyError
                    }
                    helperText={
                        !(
                            organisation.length >
                            CHARACTER_LIMIT - 1
                        )
                            ? `${organisation.length}/${CHARACTER_LIMIT}`
                            : 'Max length exceeded'
                    }
                    name='organisation'
                    value={organisation}
                    onChange={onChange}
                    required
                  />
                </div>
                <div>
                  <LoadingButton
                    size='small'
                    // loading={loginLoading}
                    loadingPosition='end'
                    endIcon={
                      <ArrowForwardIosIcon
                        style={{
                          fontSize: 12,
                          color: "green",
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
                        color: "green",
                        borderColor: "green",
                      }}
                    >
                      Register
                    </div>
                  </LoadingButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
}

Contact.propTypes = {};

export default Contact;
