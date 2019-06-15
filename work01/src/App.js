import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Intro from './components/Intro';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/intro" component={Intro} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
