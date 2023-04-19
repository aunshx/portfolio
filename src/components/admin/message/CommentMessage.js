import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

import CloseIcon from "@mui/icons-material/Close";

import { commentOnMessage } from "../../../redux/actions/contact";

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
  width: "230px",
  fontSize: '0.8em'
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

    const CHARACTER_LIMIT = 100

    const writeComment = (e) => {
        commentOnMessage(messageId, e.target.value);
    }

  return (
    <div
      className={
        displayMode
          ? "comment-card comment-card--dark ft-bold "
          : "comment-card ft-bold"
      }
      style={{ justifyContent: "space-around" }}
    >
      <div className='triple_grid--comment'>
        <div></div>
        <div className='title flex_middle'>
          <div style={{ marginRight: "0.6em" }}>
            <FontAwesomeIcon icon={faComment} style={{ marginBottom: "1px" }} />
          </div>
          <div>Comment</div>
        </div>
        <div className="flex_middle">
            <CloseIcon className="cancel" style={{ fontSize: 16 }} onClick={close} />
        </div>
      </div>
      <div className='text flex_middle'>
        {displayMode ? (
          <>
            <div style={{ marginBottom: "1.3em" }}>
              <CssTextFieldDark
                multiline
                maxRows={4}
                label='Comment'
                placeholder='Comment'
                size='small'
                InputLabelProps={{
                  style: textFieldInputLabelStyleDark,
                }}
                inputProps={{
                  maxLength: CHARACTER_LIMIT,
                  style: textFieldStyle,
                }}
                FormHelperTextProps={{
                  style: {
                    margin: 0,
                    padding: "0 0 0 5px",
                    fontSize: 10,
                    color: "grey",
                  },
                }}
                error={comment.length > CHARACTER_LIMIT - 1}
                helperText={
                  <div style={{ fontSize: "0.8em" }}>
                    {!(comment.length > CHARACTER_LIMIT - 1)
                      ? `${comment.length}/${CHARACTER_LIMIT}`
                      : "Length exceeded"}
                  </div>
                }
                name='comment'
                value={comment}
                onChange={writeComment}
              />
            </div>
          </>
        ) : (
          <>
            <CssTextField
              multiline
              maxRows={4}
              label='Comment'
              placeholder='Comment'
              size='small'
              InputLabelProps={{
                style: textFieldInputLabelStyleDark,
              }}
              inputProps={{
                maxLength: CHARACTER_LIMIT,
                style: textFieldStyle,
              }}
              FormHelperTextProps={{
                style: {
                  margin: 0,
                  padding: "0 0 0 5px",
                  fontSize: 10,
                  color: "grey",
                },
              }}
              error={comment.length > CHARACTER_LIMIT - 1}
              helperText={
                <div style={{ fontSize: "0.8em" }}>
                  {!(comment.length > CHARACTER_LIMIT - 1)
                    ? `${comment.length}/${CHARACTER_LIMIT}`
                    : "Length exceeded"}
                </div>
              }
              name='comment'
              value={comment}
              onChange={writeComment}
              required
            />
          </>
        )}
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
