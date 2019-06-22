import React from 'react';
import Header from './components/Header';
import About from './components/About/about';
import Intro from './components/Infor/information';
import Calendar from './components/Calendar/calendar';
import Infor1 from './components/Infor1/index.js';
import Jobs from './components/Jobs/index.js';
import Home from './components/Home/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.scss';

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/intro" component={Intro} />
					<Route path="/calendar" component={Calendar} />
					<Route path="/infor1" component={Infor1} />
					<Route path="/jobs" component={Jobs} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
