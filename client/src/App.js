import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { connect, Provider } from "react-redux";
import PropTypes from "prop-types";

import ArticlesMain from './components/articles/ArticlesMain';
import AboutMain from './components/about/AboutMain';
import Home from './Home';
import Projects from './components/projects/Projects';
import NotFound from './components/layout/NotFound';
import SkillsMain from './components/skills/SkillsMain';
import ContactMain from './components/contact/ContactMain';

import "./App.css";
import Sidebar from './components/navbar/Sidebar';
import { useEffect } from 'react';

import {
  DARK_MODE_ON,
  DARK_MODE_OFF
} from './redux/actions/types.js'
import store from './store';

function App({ sidebar: { hover } }) {
   useEffect(() => {
     // check for token in LS
     if (localStorage.getItem('theme') === 'dark') {
       store.dispatch({
         type: DARK_MODE_ON
       })
        document.documentElement.setAttribute("data-theme", "dark");
     } else {
       store.dispatch({
         type: DARK_MODE_OFF,
       });
        document.documentElement.setAttribute("data-theme", "light");
     }
   }, []);
  return (
    <Router>
      <>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            exact
            path='/user'
            render={(props) => (
              <AboutMain Sidebar={<Sidebar hover={hover} />} />
            )}
          />
          <Route path='/projects' component={Projects} />
          <Route
            path='/articles'
            render={(props) => (
              <ArticlesMain Sidebar={<Sidebar hover={hover} />} />
            )}
          />
          <Route
            path='/skills'
            render={(props) => (
              <SkillsMain Sidebar={<Sidebar hover={hover} />} />
            )}
          />
          <Route
            path='/contact'
            render={(props) => (
              <ContactMain Sidebar={<Sidebar hover={hover} />} />
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
};

const mapStateToProps = (state) => ({
  sidebar: state.sidebar,
});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(App);


