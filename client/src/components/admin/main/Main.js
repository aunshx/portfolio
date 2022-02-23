import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Navbar from '../navbar/Navbar'
import Messages from '../message/Messages';
import FooterAdmin from '../../layout/FooterAdmin';
import Footer from '../../layout/Footer';
import { connect } from 'react-redux';

import Alerts from '../../layout/Alerts'

import {
  getMessages
} from '../../../redux/actions/contact'

const Main = ({
  // Redux Actions
  getMessages,
  // Redux State
  contact: { messages }
}) => {

  const [limit, setLimit] = useState(0)

  useEffect(() => {
    getMessages(limit)
  }, []);
  
  return (
    <>
      <Navbar />
      <div className='app'>
        <div className='admin-main'>
          <Messages messages={messages} />
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
};

const mapStateToProps = (state) => ({
  contact: state.contact
});

const mapStateToActions = {
  getMessages,
};

export default connect(mapStateToProps, mapStateToActions)(Main);