import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCube,
  faTrash
} from "@fortawesome/free-solid-svg-icons";

import { Collapse, IconButton, Tooltip, Modal, Fade, Box } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

import Tag from "./Tag";
import StatusSelector from './StatusSelector';
import DeleteMessage from "./DeleteMessage";

import {
  updateMessageStatus,
  reduceSeenValue,
} from "../../../redux/actions/contact";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  width: "1em",
  height: "1em",
  color: "white",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const style = {
  position: "fixed",
  top: "50%",
  left: "48%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  border: "none",
  p: 4,
};

const Card = ({
  name,
  createdAt,
  message,
  organisation,
  seen,
  messageId,
  email,
  status,
  index,
  // Reduc Actions
  updateMessageStatus,
  reduceSeenValue,
  // Redux State
  settings: { displayMode },
  contact: { messagesUnseenCount },
}) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const [expanded, setExpanded] = useState(false);
  const open = Boolean(anchorEl);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeSeenStatus = () => {
    if (status === "unseen") {
      updateMessageStatus(
        "not-replied",
        messageId,
        status,
      );
      reduceSeenValue(messagesUnseenCount);
    }
  };

  const openDeleteBox = () => {
    setIsDeleteOpen(true);
  };

  const closeDeleteBox = () => {
    setIsDeleteOpen(false);
  };

  return (
    <>
      <div
        className={displayMode ? "card-admin card-admin--dark" : "card-admin"}
        onClick={changeSeenStatus}
      >
        <div className='first'>
          <div className='' style={{ justifyContent: "flex-start" }}>
            <div className='title flex_left'>{name}</div>
            <div className='dateTime'>
              {moment(createdAt).format("DD/MM/YY")} |{" "}
              {moment(createdAt).fromNow()}
            </div>
          </div>
          <div className='flex_right'>
            <Tag status={status} />
          </div>
        </div>
        <div className='second app'>
          <div style={{ wordBreak: "break-all" }}>{email}</div>
          <div className='org'>{organisation}</div>
        </div>
        <div className='third'>
          <Tooltip title='Delete Message' placement='top'>
            <div className='flex_left'>
              <FontAwesomeIcon
                icon={faTrash}
                style={{ fontSize: 11 }}
                className='delete icons'
                onClick={openDeleteBox}
              />
            </div>
          </Tooltip>
          <Tooltip title='See Message' placement='top'>
            <div className='flex_middle'>
              <ExpandMore
                expand={expanded}
                aria-expanded={expanded}
                aria-label='show more'
              >
                <ExpandMoreIcon
                  style={{
                    fontSize: 28,
                  }}
                  className='icons'
                  onClick={handleExpandClick}
                />
              </ExpandMore>
            </div>
          </Tooltip>
          <Tooltip title='Change Status' placement='top'>
            <div className='flex_right'>
              <FontAwesomeIcon
                icon={faCube}
                style={{ fontSize: 14 }}
                className='icons'
                onClick={handleClick}
              />
            </div>
          </Tooltip>
          <div>
            <StatusSelector
              handleClose={handleClose}
              open={open}
              anchorEl={anchorEl}
              messageId={messageId}
              status={status}
            />
          </div>
        </div>
        <div>
          <Collapse
            in={expanded}
            timeout='auto'
            unmountOnExit
            style={{
              padding: 0,
            }}
          >
            <div className='expanded-message'>{message}</div>
          </Collapse>
        </div>
      </div>
      <Modal
        open={isDeleteOpen}
        onClose={!isDeleteOpen}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
          style: {
            backgroundColor: "rgba(0,0,0,0.8)",
          },
        }}
      >
        <Fade in={isDeleteOpen}>
          <Box style={style}>
            <DeleteMessage
              name={name}
              close={closeDeleteBox}
              messageId={messageId}
            />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

Card.propTypes = {
  settings: PropTypes.object.isRequired,
  contact: PropTypes.object.isRequired,
  updateMessageStatus: PropTypes.func.isRequired,
  reduceSeenValue: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    settings: state.settings,
    contact: state.contact,
})

const mapActionsToProps = {
  updateMessageStatus,
  reduceSeenValue,
};

export default connect(mapStateToProps, mapActionsToProps)(Card)