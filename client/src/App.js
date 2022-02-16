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

function App({ sidebar: { hover } }) {
  return (
      <Router>
        <>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/user' render={(props) => <AboutMain {...props} />} />
            <Route path='/projects' component={Projects} />
            <Route path='/articles' component={ArticlesMain} />
            <Route path='/skills' component={SkillsMain} />
            <Route path='/contact' component={ContactMain} />
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


