import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = props => (
	<div>
		<button onClick={() => props.history.push('topics/2')}>Topics De</button>
		<h1>HATS PAGE</h1>
	</div>
);

function App() {
	return (
		<div>
			<Route exact path='/' component={HomePage} />
			<Route exact path='/hats' component={HatsPage} />
		</div>
	);
}

export default App;
