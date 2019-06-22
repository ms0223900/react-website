import React from 'react';
import Header from './components/Header';
import About from './components/About/about';
import Intro from './components/Infor/information';
import Calendar from './components/Calendar/calendar';
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
				</Switch>
			</div>
		</Router>
	);
}

export default App;
