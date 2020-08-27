//import react, react dom and react router dom
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//import app
import App from './App'

//const for get the app from index.html
const root = document.getElementById('app');

//render react dom
ReactDom.render(
	<Router>
		<App />
	</Router>,
	root,
);
