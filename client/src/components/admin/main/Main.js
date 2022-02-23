import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";

import RefreshIcon from "@mui/icons-material/Refresh";

import Navbar from '../navbar/Navbar'
import Messages from '../message/Messages';

import Alerts from '../../layout/Alerts'

import {
  getMessages,
  setRendererMessagesFalse,
  getMessagesOnReload,
} from "../../../redux/actions/contact";
import { Tooltip } from '@mui/material';

const Main = ({
  // Redux Actions
  getMessages,
  setRendererMessagesFalse,
  getMessagesOnReload,
  // Redux State
  contact: { messages, messagesLoading, lazyLoading, rendererMessages },
}) => {
  const [offset, setOffset] = useState(0);
  const [change, setChange] = useState(false);

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
          setOffset(offset + 8);
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
    if (rendererMessages === false) getMessages(offset);
  }, [offset, getMessages])

  const reload = () => {
    getMessagesOnReload(0);
    setChange(false);
  }

  return (
    <>
      <Navbar />
      <div
        className='app
      margin'
      >
        <div className='admin-main-settings flex_middle'>
          <div>
            <RefreshIcon className='icons' onClick={() => reload(offset)} />
          </div>
          <Tooltip title='Not Replied' placement='left'>
            <div className='not-replied cursor_pointer'>N</div>
          </Tooltip>
          <Tooltip title='Unseen' placement='left'>
            <div className='unseen cursor_pointer'>U</div>
          </Tooltip>
          <Tooltip title='Ongoing' placement='left'>
            <div className='ongoing cursor_pointer'>O</div>
          </Tooltip>
          <Tooltip title='Success' placement='left'>
            <div className='success cursor_pointer'>S</div>
          </Tooltip>
          <Tooltip title='Cold' placement='left'>
            <div className='cold cursor_pointer'>C</div>
          </Tooltip>
        </div>
        {change && (
          <div className='admin-main'>
            <Messages
              messages={messages}
              lastBookElementRef={lastBookElementRef}
            />
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
  getMessages: PropTypes.func.isRequired,
  setRendererMessagesFalse: PropTypes.func.isRequired,
  getMessagesOnReload: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contact: state.contact
});

const mapStateToActions = {
  getMessages,
  setRendererMessagesFalse,
  getMessagesOnReload,
};

export default connect(mapStateToProps, mapStateToActions)(Main);