import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import ArticlesMain from './components/articles/ArticlesMain';
import AboutMain from './components/about/AboutMain';
import Home from './Home';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';
import NotFound from './components/layout/NotFound';

function App() {
  return (
    <Router>
        <>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/user' component={AboutMain} />
            <Route path='/projects' component={Projects} />
            <Route path='/articles' component={ArticlesMain} />
            <Route path='/skills' component={Skills} />
            <Route path='/contact' component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </>
      </Router>
  );
}

export default App;
