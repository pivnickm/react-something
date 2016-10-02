import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/commentBox'
import Test from './components/test'
import PokemonContainer from './components/PokemonContainer'
import PokemonGrid from './components/PokemonGrid'
import { Router, Route, Link, hashHistory } from 'react-router'

import './styles/global.less'

const App = ({
	...props
}) => {
	return (
		<div>
			<PokemonGrid />
		</div>
	)
}

ReactDOM.render((
		<Router history={hashHistory}>
			<Route path="/" component={App} />
			<Route path="/test" component={Test} />
			<Route path="/pokemon/:pokedexNumber" component={PokemonContainer} />
		</Router>
	),
	document.getElementById('root')
);