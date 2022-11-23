import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSkullCrossbones
} from "@fortawesome/free-solid-svg-icons";

import {
    deleteMessage
} from '../../../redux/actions/contact'

const DeleteMessage = ({
  close,
  name,
  messageId,
  // Redux Actions
  deleteMessage,
  // Redux State
  settings: { displayMode },
  contact: { deleteMessageLoading },
}) => {
  const messageDeletion = (messageId) => {
    deleteMessage(messageId)
    close()
  }
  return (
    <div
      className={
        displayMode
          ? "delete-card delete-card--dark ft-bold app"
          : "delete-card ft-bold app"
      }
      style={{ justifyContent: "space-around" }}
    >
      <div className='title flex_middle'>
        <div style={{ marginRight: "0.6em" }}>
          <FontAwesomeIcon
            icon={faSkullCrossbones}
            style={{ marginBottom: "1px" }}
          />
        </div>
        <div>Warning!</div>
      </div>
      <div>
        Are you sure you want to delete {name ? <span>{name}'s</span> : "this"}{" "}
        message?
      </div>
      <div className='flex_right' style={{ width: "100%" }}>
        <div className='flex_middle'>
          <div style={{ marginRight: "1.3em" }}>
            <button
              className='button-yes flex_middle'
              onClick={() => messageDeletion(messageId)}
            >
              <div className='flex_middle'>
                <div>Yes</div>
              </div>
            </button>
          </div>
          <div>
            <button className='button-no' onClick={() => close()}>
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

DeleteMessage.propTypes = {
  settings: PropTypes.object.isRequired,
  contact: PropTypes.object.isRequired,
  deleteMessage: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  settings: state.settings,
  contact: state.contact,
});

const mapActionsToProps = {
  deleteMessage,
};

export default connect(mapStateToProps, mapActionsToProps)(DeleteMessage);