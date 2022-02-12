import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from "react-redux";

import ArticlesMain from './components/articles/ArticlesMain';
import AboutMain from './components/about/AboutMain';
import Home from './Home';
import Projects from './components/projects/Projects';
import NotFound from './components/layout/NotFound';
import SkillsMain from './components/skills/SkillsMain';
import ContactMain from './components/contact/ContactMain';

import "./App.css";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/user' component={AboutMain} />
            <Route path='/projects' component={Projects} />
            <Route path='/articles' component={ArticlesMain} />
            <Route path='/skills' component={SkillsMain} />
            <Route path='/contact' component={ContactMain} />
            <Route component={NotFound} />
          </Switch>
        </>
      </Router>
    </Provider>
  );
}

export default App;
