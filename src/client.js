import React from 'react';
import ReactDOM from 'react-dom';
import PokemonContainer from './components/PokemonContainer'
import PokemonGrid from './components/PokemonGrid'
import { Router, Route, hashHistory } from 'react-router'

import './styles/global.less'

const App = () => {
	return (
		<div className="grid-wrapper">
			<div className="left-col">
				Some text about what this is. Maybe Lorum-Ipsum for now?
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum, lacus sit amet ornare fringilla, tellus magna dapibus sem, id hendrerit quam elit sit amet quam. Maecenas pretium scelerisque libero non venenatis. Vivamus tristique tristique arcu eget venenatis. Aliquam posuere a elit ac finibus. Nunc varius enim ac accumsan malesuada. Vivamus sit amet nisi justo. Donec sit amet justo non nisl facilisis egestas. Integer auctor ipsum non felis aliquam ornare gravida eu est. Proin aliquam risus purus, faucibus iaculis nisl sollicitudin eget. Donec eleifend fermentum neque, nec porttitor ante malesuada at. Aenean viverra id massa id pretium. Maecenas felis nunc, ullamcorper sit amet urna ac, mollis malesuada arcu. Cras ut felis porta nisl elementum tincidunt. Sed luctus ante a consequat ultrices. Sed tincidunt elit sit amet dictum molestie.

Cras dignissim placerat est, in suscipit urna accumsan in. Mauris eu sapien efficitur enim scelerisque mattis. Maecenas sagittis suscipit diam, eget pharetra libero facilisis sit amet. Curabitur vel pellentesque nibh, ac consectetur orci. Quisque vel interdum mauris, maximus pharetra libero. Aliquam bibendum luctus sem accumsan vulputate. Nulla dignissim iaculis porta. Donec eu sem non felis luctus sodales.
			</div>
			<PokemonGrid />
		</div>
	)
}

ReactDOM.render((
		<Router history={hashHistory}>
			<Route path="/" component={App} />
			<Route path="/pokemon/:pokedexNumber" component={PokemonContainer} />
		</Router>
	),
	document.getElementById('root')
);