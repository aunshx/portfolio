import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import useSound from "use-sound";

import Home from "./Home";
import NotFound from "./components/shared/layout/NotFound.js";
import WillBeLive from "./components/shared/layout/WillBeLive.js";

import "./App.css";

import {
  DARK_MODE_OFF,
  DARK_MODE_ON,
} from "./redux/actions/types.js";
import store from "./store";

import darkBackground from "./resources/sounds/darkBackground.mp3";
import lightBackground from "./resources/sounds/lightBackground.mp3";


function App({
  sidebar: { hover },
  // Redux States
  settings: { sound, displayMode, music },
}) {

  const [playBackgroundLight, { stop }] = useSound(lightBackground, {
    volume: 0.2,
  });
  const [playBackgroundDark, { stop: stop2 }] = useSound(darkBackground, {
    volume: 0.2,
  });

  useEffect(() => {
    // // check for token in LS
    // if (localStorage.token) {
    //   setAuthToken(localStorage.token);
    //   store.dispatch(loadUser());
    // }
    // // log user out from all tabs if they log out in one tab
    // window.addEventListener("storage", () => {
    //   if (!localStorage.token) store.dispatch({ type: LOGOUT });
    // });

    if (localStorage.getItem("theme") === "light") {
      store.dispatch({
        type: DARK_MODE_OFF,
      });
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      store.dispatch({
        type: DARK_MODE_ON,
      });
      document.documentElement.setAttribute("data-theme", "dark");
    }

    if (music && displayMode) {
      stop();
      playBackgroundDark();
    }

    if (!music && displayMode) {
      stop();
      stop2();
    }

    if (!music && !displayMode) {
      stop();
      stop2();
    }

    if (music && !displayMode) {
      stop2();
      playBackgroundLight();
    }

  }, [music, displayMode]);

  const [isLoading, setLoading] = useState(true);

  function someRequest() {
    return new Promise((resolve) => setTimeout(() => resolve(), 150));
  }

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".complete-screen");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  if (isLoading) {
    return null;
  }

  if (true) {
    return (
      <Router>
        <>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route element={<NotFound />} />
          </Routes>
        </>
      </Router>
    );
  } else {
    return (
      <Router>
        <Routes>
          <WillBeLive />
        </Routes>
      </Router>
    )
  }
}

App.propTypes = {
  sidebar: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  sidebar: state.sidebar,
  settings: state.settings,
});

const mapActionsToProps = {
}

export default connect(mapStateToProps, mapActionsToProps)(App);
