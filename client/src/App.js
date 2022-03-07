import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import useSound from "use-sound";

import ArticlesMain from "./components/articles/ArticlesMain";
import AboutMain from "./components/about/AboutMain";
import Home from "./Home";
import NotFound from "./components/layout/NotFound";
import SkillsMain from "./components/skills/SkillsMain";
import ContactMain from "./components/contact/ContactMain";
import Sidebar from "./components/navbar/Sidebar";
import ProjectsMain from "./components/projects/ProjectsMain";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/admin/auth/Login";
import Main from "./components/admin/main/Main";
import PrivateRoute from "./utils/PrivateRoute";
import Stats from "./components/admin/stats/Stats";

import "./App.css";

import { DARK_MODE_ON, DARK_MODE_OFF, LOGOUT } from "./redux/actions/types.js";
import store from "./store";

import lightBackground from "./resources/sounds/lightBackground.mp3";
import darkBackground from "./resources/sounds/darkBackground.mp3";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./redux/actions/auth";
import { captureIpNow } from "./redux/actions/metrics";

function App({ sidebar: { hover }, settings: { sound, displayMode, music } }) {
  const [playBackgroundLight, { stop }] = useSound(lightBackground, {
    volume: 0.2,
  })
  const [playBackgroundDark, { stop: stop2 }] = useSound(darkBackground, {
    volume: 0.2,
  })

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
    // check for token in LS
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

    // Capture Ip
    captureIpNow();
  }, [music, displayMode]);

  return (
    <Router>
      <>
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => (
              <Home Sidebar={<Sidebar hover={hover} />} Navbar={<Navbar />} />
            )}
          />
          <Route
            exact
            path='/user'
            render={(props) => (
              <AboutMain
                Sidebar={<Sidebar hover={hover} />}
                Navbar={<Navbar />}
              />
            )}
          />
          <Route
            path='/projects'
            render={(props) => (
              <ProjectsMain
                Sidebar={<Sidebar hover={hover} />}
                Navbar={<Navbar />}
              />
            )}
          />
          <Route
            path='/articles'
            render={(props) => (
              <ArticlesMain
                Sidebar={<Sidebar hover={hover} />}
                Navbar={<Navbar />}
              />
            )}
          />
          <Route
            path='/skills'
            render={(props) => (
              <SkillsMain
                Sidebar={<Sidebar hover={hover} />}
                Navbar={<Navbar />}
              />
            )}
          />
          <Route
            path='/contact'
            render={(props) => (
              <ContactMain
                Sidebar={<Sidebar hover={hover} />}
                Navbar={<Navbar />}
              />
            )}
          />
          <PrivateRoute
            path='/admin'
            exact
            component = {Main}
          />
          <PrivateRoute
            path='/admin/stats'
            component = {Stats}
          />
          <Route
            path='/admin/login'
            render={(props) => (
              <Login Sidebar={<Sidebar hover={hover} />} Navbar={<Navbar />} />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </>
    </Router>
  );
}

App.propTypes = {
  sidebar: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  captureIpNow: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
  sidebar: state.sidebar,
  settings: state.settings,
});

const mapActionsToProps = {
  captureIpNow
}

export default connect(mapStateToProps, mapActionsToProps)(App);
