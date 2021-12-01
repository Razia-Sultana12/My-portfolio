import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';

import SingleProject from './Components/Home/SingleProject/SingleProject';
import Projects from './Components/Home/Projects/Projects';
import About from './Components/Home/About/About';
import Contact from './Components/Home/Contact/Contact';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';


function App() {
  return (
    <div>
      
       <Router>
    <Switch>
      
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/projects">
       <Projects></Projects>
      </Route>
      <Route path="/singleProject/:projectId">
        <SingleProject></SingleProject>
      </Route>
      <Route path="/about">
       <About></About>
      </Route>
      <Route path="/contact">
       <Contact></Contact>
      </Route>
    </Switch>
  </Router>
      
    </div>
  );
}

export default App;
