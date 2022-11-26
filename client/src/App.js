import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import useSound from "use-sound";
import {
  isBrowser,
} from "react-device-detect";


import Home from "./Home";
import NotFound from "./components/common/layout/NotFound";
import Sidebar from "./components/common/navbar/Sidebar";
import Navbar from "./components/common/navbar/Navbar";
import Login from "./components/admin/auth/Login";
import Main from "./components/admin/main/Main";
import PrivateRoute from "./utils/PrivateRoute";
import Stats from "./components/admin/stats/Stats";
import Blog from './components/admin/blog/Blog'
import CheckAuth from "./components/admin/blog/auth/CheckAuth";
import WillBeLive from "./components/common/layout/WillBeLive";

import "./App.css";

import { 
  // DARK_MODE_ON, 
  // DARK_MODE_OFF, 
  LOGOUT 
} from "./redux/actions/types.js";
import store from "./store";

import lightBackground from "./resources/sounds/lightBackground.mp3";
import darkBackground from "./resources/sounds/darkBackground.mp3";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./redux/actions/auth";
import BlogAuthRoute from "./utils/BlogAuthRoute";

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
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());
    }
    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });

    // if (localStorage.getItem("theme") === "light") {
    //   store.dispatch({
    //     type: DARK_MODE_OFF,
    //   });
    //   document.documentElement.setAttribute("data-theme", "light");
    // } else {
    //   store.dispatch({
    //     type: DARK_MODE_ON,
    //   });
    //   document.documentElement.setAttribute("data-theme", "dark");
    // }

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
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 1500));
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
    //
    return null;
  }

  if (true) {
    if (window.location.host.split(".")[0] === "admin") {
      return (
        <Router>
          <>
            <Switch>
              {/* -------------------- ADMIN ----------------------- */}

              <PrivateRoute path='/' exact component={Main} />
              <PrivateRoute path='/stats' exact component={Stats} />
              <BlogAuthRoute path='/blog' exact component={Blog} />
              <PrivateRoute
                path='/blog-check-auth'
                exact
                component={CheckAuth}
              />
              <Route
                exact
                path='/login'
                render={(props) => (
                  <Login
                    Sidebar={<Sidebar hover={hover} />}
                    Navbar={<Navbar />}
                  />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </>
        </Router>
      );
    } else {
      return (
        <Router>
          <>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route
                path='/admin/login'
                render={(props) => (
                  <Login
                    Sidebar={<Sidebar hover={hover} />}
                    Navbar={<Navbar />}
                  />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </>
        </Router>
      );
    }
  } else {
    return (
      <Router>
      <Switch>
        <WillBeLive />
      </Switch>
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
