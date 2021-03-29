import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Events/Home';
import AddEvents from './components/AddEvents/AddEvents';


function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/events">Deshboard</Link>
          </li>
          <li>
            <Link to="/addevents">AddEvents</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/addevents">
          <AddEvents/>
        </Route>
        
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
