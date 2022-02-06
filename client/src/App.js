import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Articles from './components/articles/Articles';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';
import NotFound from './components/layout/NotFound';

function App() {
  return (
    <Router>
        <>
          <Switch>
            <Route path='/' component={Home} />
            <Route path='/projects' component={Projects} />
            <Route path='/articles' component={Articles} />
            <Route path='/skills' component={Skills} />
            <Route path='/contact' component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </>
      </Router>
  );
}

export default App;
