import React from 'react';
import ReactDOM from 'react-dom';

const PokemonStats = ({
	name,
	id,
	...props
}) => {
	return (
		<div>
			<span className="pokemonName">{name}</span> |
			<span className="pokemonNumber">#{id}</span>
		</div>
	);
};

export default PokemonStats;