import React from 'react';
import ReactDOM from 'react-dom';
import PokemonContainer from './containers/PokemonContainer'
import PokemonGrid from './containers/PokemonGrid'
import Div from './components/Div'
import { Router, Route, browserHistory } from 'react-router'

import './styles/global.less'

const App = () => {
	return (
		<div className="grid-wrapper">
			<Div
				className='left-col'
				content='REACT-POKEDEX'
			/>
			<PokemonGrid />
		</div>
	)
}

ReactDOM.render((
		<Router history={browserHistory}>
			<Route path="/" component={App} />
			<Route path="/pokemon/:pokedexNumber" component={PokemonContainer} />
		</Router>
	),
	document.getElementById('root')
);