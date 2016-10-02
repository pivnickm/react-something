import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/commentBox'
import Test from './components/test'
import { Router, Route, Link, hashHistory } from 'react-router'

const App = ({
	...props
}) => {
	return (
		<div>
			<div><Link to="/test">About</Link></div>
			<CommentBox url="/api/comments" pollInterval={2000} />
		</div>
	)
}

ReactDOM.render((
		<Router history={hashHistory}>
			<Route path="/" component={App} />
			<Route path="/test" component={Test} />
		</Router>
	),
	document.getElementById('root')
);