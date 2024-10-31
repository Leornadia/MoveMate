import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Exercises from './components/Exercises';
import Goals from './components/Goals';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/exercises" component={Exercises} />
          <Route path="/goals" component={Goals} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
