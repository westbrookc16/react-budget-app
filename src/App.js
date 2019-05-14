import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignIn from './SignIn';
import Navigation from './Navigation';
import Home from './Home';
import FirebaseUser from './firebase/FirebaseUser';
import './App.css';

function App() {
	return (
		<div className="App">
			<FirebaseUser>
				<Router>
					<Navigation />
					<Route path="/signin" component={SignIn} />
					<Route path="/" exact component={Home} />
				</Router>
			</FirebaseUser>
		</div>
	);
}

export default App;
