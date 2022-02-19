import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Navbar from '../navbar/Navbar'
import setAuthToken from '../../../utils/setAuthToken';
import { loadUser } from '../../../redux/actions/auth';
import store from '../../../store';
import { LOGOUT } from '../../../redux/actions/types';

const Main = props => {
    useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());
    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
        if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
    }, []);
  return (
    <>
        <Navbar />
    </>
  )
}

Main.propTypes = {}

export default Main