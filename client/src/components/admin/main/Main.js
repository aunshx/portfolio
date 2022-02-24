import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";

import RefreshIcon from "@mui/icons-material/Refresh";
import CableIcon from "@mui/icons-material/Cable";

import Navbar from '../navbar/Navbar'
import Messages from '../message/Messages';

import Alerts from '../../layout/Alerts'

import {
  getMessages,
  setRendererMessagesFalse,
  getMessagesOnReload,
  getMessagesOldest,
  getMessagesOldestOnReload,
} from "../../../redux/actions/contact";
import { Tooltip } from '@mui/material';
import MessagesOldest from '../message/MessagesOldest';

const Main = ({
  // Redux Actions
  getMessages,
  setRendererMessagesFalse,
  getMessagesOnReload,
  getMessagesOldest,
  getMessagesOldestOnReload,
  // Redux State
  contact: {
    messages,
    messagesLoading,
    lazyLoading,
    rendererMessages,
    messagesOldest,
  },
  auth: { isAuthenticated },
}) => {
  const [offset, setOffset] = useState(0);
  const [offsetOldest, setOffsetOldest] = useState(0);
  const [change, setChange] = useState(false);
  const [notRepliedOn, setNotRepliedOn] = useState(true);
  const [ongoingOn, setOngoingOn] = useState(true);
  const [successOn, setSuccessOn] = useState(true);
  const [unseenOn, setUnseenOn] = useState(true);
  const [coldOn, setColdOn] = useState(true);
  const [seeOldest, setSeeOldest] = useState(false);

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (messagesLoading) return;
      if (observer.current) {
        observer.current.disconnect();
      }
      const options = {
        root: null,
        threshold: 0,
      };

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && lazyLoading) {
          setRendererMessagesFalse();
          if (seeOldest) {
            setOffsetOldest(offsetOldest + 8);
          } else {
            setOffset(offset + 8);
          }
        }
      }, options);
      if (node) {
        observer.current.observe(node);
      }
    },
    [offset, lazyLoading, messagesLoading, setRendererMessagesFalse]
  );

  useEffect(() => {
    setChange(true);
  }, [change]);

  useEffect(() => {
    if (rendererMessages === false && seeOldest === false) getMessages(offset);
    if (rendererMessages === false && seeOldest === true)
      getMessagesOldest(offsetOldest);
  }, [offset, offsetOldest, getMessages]);

  const reload = () => {
    if (seeOldest) {
      getMessagesOldestOnReload(0);
      setOffsetOldest(0);
    } else {
      getMessagesOnReload(0);
      setOffset(0);
    }
    setChange(false);
  };

  const fetchNewest = () => {
    setSeeOldest(false);
    getMessages(0);
    setOffsetOldest(0);
  };

  const fetchOldest = () => {
    setSeeOldest(true);
    getMessagesOldest(0);
    setOffset(0);
  };

  return (
    <>
      <Navbar />
      <div
        className='app
      margin'
      >
        <div className='admin-main-settings flex_middle'>
          <Tooltip title='Reload' placement='left'>
            <div>
              <RefreshIcon className='icons' onClick={() => reload(offset)} />
            </div>
          </Tooltip>
          <Tooltip
            title={seeOldest ? "Oldest Messages" : "Newest Messages"}
            placement='left'
          >
            <div
              className={
                seeOldest
                  ? "icons-2-active cursor_pointer"
                  : "icons-2 cursor_pointer"
              }
              onClick={seeOldest ? fetchNewest : fetchOldest}
            >
              <CableIcon style={{ fontSize: 21 }} />
            </div>
          </Tooltip>
          <Tooltip title='Not Replied' placement='left'>
            <div
              className={
                notRepliedOn
                  ? "not-replied cursor_pointer"
                  : "unselected-bigger cursor_pointer"
              }
              onClick={() => setNotRepliedOn(!notRepliedOn)}
            >
              N
            </div>
          </Tooltip>
          <Tooltip title='Unseen' placement='left'>
            <div
              className={
                unseenOn
                  ? "unseen cursor_pointer"
                  : "unselected-bigger cursor_pointer"
              }
              onClick={() => setUnseenOn(!unseenOn)}
            >
              U
            </div>
          </Tooltip>
          <Tooltip title='Ongoing' placement='left'>
            <div
              className={
                ongoingOn
                  ? "ongoing cursor_pointer"
                  : "unselected cursor_pointer"
              }
              onClick={() => setOngoingOn(!ongoingOn)}
            >
              O
            </div>
          </Tooltip>
          <Tooltip title='Success' placement='left'>
            <div
              className={
                successOn
                  ? "success cursor_pointer"
                  : "unselected-bigger cursor_pointer"
              }
              onClick={() => setSuccessOn(!successOn)}
            >
              S
            </div>
          </Tooltip>
          <Tooltip title='Cold' placement='left'>
            <div
              className={
                coldOn
                  ? "cold cursor_pointer"
                  : "unselected-bigger cursor_pointer"
              }
              onClick={() => setColdOn(!coldOn)}
            >
              C
            </div>
          </Tooltip>
        </div>
        {change && (
          <div className='admin-main'>
            {seeOldest ? (
              <MessagesOldest
                messages={messagesOldest}
                lastBookElementRef={lastBookElementRef}
                notRepliedOn={notRepliedOn}
                ongoingOn={ongoingOn}
                successOn={successOn}
                unseenOn={unseenOn}
                coldOn={coldOn}
              />
            ) : (
              <Messages
                messages={messages}
                lastBookElementRef={lastBookElementRef}
                notRepliedOn={notRepliedOn}
                ongoingOn={ongoingOn}
                successOn={successOn}
                unseenOn={unseenOn}
                coldOn={coldOn}
              />
            )}
          </div>
        )}
      </div>
      <div>
        <Alerts />
      </div>
    </>
  );
};

Main.propTypes = {
  contact: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  getMessages: PropTypes.func.isRequired,
  setRendererMessagesFalse: PropTypes.func.isRequired,
  getMessagesOnReload: PropTypes.func.isRequired,
  getMessagesOldest: PropTypes.func.isRequired,
  getMessagesOldestOnReload: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contact: state.contact,
  auth: state.auth
});

const mapStateToActions = {
  getMessages,
  setRendererMessagesFalse,
  getMessagesOnReload,
  getMessagesOldest,
  getMessagesOldestOnReload,
};

export default connect(mapStateToProps, mapStateToActions)(Main);