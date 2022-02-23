import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import PullToRefresh from "react-simple-pull-to-refresh";

import Navbar from '../navbar/Navbar'
import Messages from '../message/Messages';

import Alerts from '../../layout/Alerts'

import {
  getMessages,
  setRendererMessagesFalse,
} from '../../../redux/actions/contact'

const Main = ({
  // Redux Actions
  getMessages,
  setRendererMessagesFalse,
  // Redux State
  contact: { messages, messagesLoading, lazyLoading, rendererMessages },
}) => {
  const [offset, setOffset] = useState(0);

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
    if (rendererMessages === false) getMessages(offset);
  }, [offset, getMessages]);

  return (
    <>
      <Navbar />
      <div className='app'>
        <div className='admin-main'>
          <Messages
            messages={messages}
            lastBookElementRef={lastBookElementRef}
          />
        </div>
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
};

const mapStateToProps = (state) => ({
  contact: state.contact
});

const mapStateToActions = {
  getMessages,
  setRendererMessagesFalse,
};

export default connect(mapStateToProps, mapStateToActions)(Main);