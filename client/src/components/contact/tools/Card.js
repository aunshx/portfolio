import React from 'react'
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

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

const Card = ({
  displayMode,
  // Errors
  messageEmptyError,
  emailEmptyError,
  nameEmptyError,
  emailInvalidError,
  // Functions
  onChange,
  onSubmit,
  // Loading
  emailLoading,
  // Data
  name,
  email,
  organisation,
  message,
}) => {
  const CHARACTER_LIMIT = 144;

  const iconButtonStyle = loginIconButtonStyle();

  return (
    <div
      className='body flex_middle'
      style={{ marginTop: "2em" }}
    >
      {displayMode ? (
        <div className='form form--dark'>
          <div className='app title'>
            <div className='first ft-bold flex_middle'>Send a DM!</div>
          </div>
          <div className='app'>
            {!messageEmptyError &&
              !emailEmptyError &&
              !nameEmptyError &&
              !emailInvalidError && <div className='errors-one'>.</div>}
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
              <CssTextFieldDark
                error={nameEmptyError}
                label='Full Name'
                placeholder='Full Name'
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
                name='name'
                value={name}
                onChange={onChange}
                required
              />
            </div>
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
            <div style={{ marginBottom: "1.3em" }}>
              <CssTextFieldDark
                label='Organization'
                placeholder='Organization'
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
                name='organisation'
                value={organisation}
                onChange={onChange}
              />
            </div>
            <div style={{ marginBottom: "1.3em" }}>
              <CssTextFieldDark
                multiline
                label='Message'
                placeholder='Message'
                size='small'
                focusColor='rgb(0, 145, 255)'
                InputLabelProps={{
                  style: textFieldInputLabelStyleDark,
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
      ) : (
        <div className='form'>
          <div className='app title'>
            <div className='first ft-bold flex_middle'>Send a DM!</div>
          </div>
          <div className='app'>
            {!messageEmptyError &&
              !emailEmptyError &&
              !nameEmptyError &&
              !emailInvalidError && (
                <div className='errors' style={{ backgroundColor: "white" }}>
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
      )}
    </div>
  );
};

export default Card