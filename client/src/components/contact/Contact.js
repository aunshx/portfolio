import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import { TextField } from '@mui/material';
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    showPassword: false,
  });

  const iconButtonStyle = loginIconButtonStyle();

  const [passwordEmptyError, setPasswordEmptyError] = useState(false);
  const [nameEmptyError, setNameEmptyError] = useState(false);
  const [emailEmptyError, setEmailEmptyError] = useState(false);

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
      <div className="image">
        <img src={contactImage} alt="Contact Image" />
      </div>
      <div className="form">

      </div>
    </div>
  </div>;;
};

Contact.propTypes = {};

export default Contact;
