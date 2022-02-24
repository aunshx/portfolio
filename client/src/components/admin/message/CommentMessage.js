import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

import { commentOnMessage } from "../../../redux/actions/contact";

import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

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
 

const CommentMessage = ({
  close,
  comment,
  messageId,
  // Redux Actions
  commentOnMessage,
  // Redux State
  settings: { displayMode },
}) => {

    const writeComment = (e) => {
        commentOnMessage(messageId, e.target.value);
    }

  return (
    <div
      className={
        displayMode
          ? "comment-card comment-card--dark ft-bold app"
          : "comment-card ft-bold app"
      }
      style={{ justifyContent: "space-around" }}
    >
      <div className='title flex_middle'>
        <div style={{ marginRight: "0.6em" }}>
          <FontAwesomeIcon icon={faComment} style={{ marginBottom: "1px" }} />
        </div>
        <div>Comment</div>
      </div>
      <div className='text'>
        {displayMode ? (
          <>
            <div style={{ marginBottom: "1.3em" }}>
              <CssTextFieldDark
                label='Comment'
                placeholder='Comment'
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
                name='comment'
                value={comment}
                onChange={writeComment}
                required
              />
            </div>
          </>
        ) : (
          <>
            <CssTextField
              label='Comment'
              placeholder='Comment'
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
              name='comment'
              value={comment}
              onChange={writeComment}
              required
            />
          </>
        )}
      </div>
      <div className='flex_middle'>
        <button
          className='button-yes flex_middle'
          //   onClick={() => messageDeletion(messageId)}
        >
          <div className='flex_middle'>
            <div>Submit</div>
          </div>
        </button>
      </div>
    </div>
  );
};

CommentMessage.propTypes = {
  settings: PropTypes.object.isRequired,
  contact: PropTypes.object.isRequired,
  commentOnMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  settings: state.settings,
  contact: state.contact,
});

const mapActionsToProps = {
  commentOnMessage,
};

export default connect(mapStateToProps, mapActionsToProps)(CommentMessage);
