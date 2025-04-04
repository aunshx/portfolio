import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import useSound from "use-sound";

import Home from "./Home";
import Login from "./components/admin/auth/Login";
import Blog from './components/admin/blog/Blog';
import CheckAuth from "./components/admin/blog/auth/CheckAuth";
import Main from "./components/admin/main/Main";
import Stats from "./components/admin/stats/Stats";
import NotFound from "./components/common/layout/NotFound";
import WillBeLive from "./components/common/layout/WillBeLive";
import Navbar from "./components/common/navbar/Navbar";
import Sidebar from "./components/common/navbar/Sidebar";
import PrivateRoute from "./utils/PrivateRoute";

import "./App.css";

import {
  DARK_MODE_OFF,
  DARK_MODE_ON,
} from "./redux/actions/types.js";
import store from "./store";

import darkBackground from "./resources/sounds/darkBackground.mp3";
import lightBackground from "./resources/sounds/lightBackground.mp3";
// import setAuthToken from "./utils/setAuthToken";
// import { loadUser } from "./redux/actions/auth";
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
    if (window.location.host.split(".")[0] === "admin") {
      return (
        <Router>
          <>
            <Routes>
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
            </Routes>
          </>
        </Router>
      );
    } else {
      return (
        <Router>
          <>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route
                path='/admin/login'
                render={(props) => (
                  <Login
                    Sidebar={<Sidebar hover={hover} />}
                    Navbar={<Navbar />}
                  />
                )}
              />
              <Route element={<NotFound />} />
            </Routes>
          </>
        </Router>
      );
    }
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
