import React from 'react';
import ReactDOM from 'react-dom';

import './style.less'

const PokemonStats = ({
	name,
	id,
	...props
}) => {
	return (
		<div className="pokemon-info">
			<h2 className="pokemon-name">#{id} {name}</h2>
			<span className="pokemon-number"></span>
		</div>
	);
};

export default PokemonStats;