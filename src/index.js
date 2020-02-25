import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HeaderBar from './components/HeaderBar';
import AboutComponent from './components/AboutComponent';

const Routing = () => (
	<Router>
		<HeaderBar/>
		<div>
			<Route exact path='/' component={App} />
			<Route path ='/about' component={AboutComponent} />
		</div>
	</Router>
);

ReactDOM.render(<Routing />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
