import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCube,
  faTrash
} from "@fortawesome/free-solid-svg-icons";

import { Collapse, IconButton, Tooltip } from '@mui/material';

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

import Tag from "./Tag";
import StatusSelector from './StatusSelector';

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
  // Redux State
  settings: { displayMode } 
}) => {

  useEffect(() => {}, [])

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

  return (
    <>
      <div
        className={displayMode ? "card-admin card-admin--dark" : "card-admin"}
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
    </>
  );
}

Card.propTypes = {
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    settings: state.settings
})

const mapActionsToProps = {
};

export default connect(mapStateToProps, mapActionsToProps)(Card)