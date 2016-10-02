import React from 'react';
import ReactDOM from 'react-dom';

import './style.less'

const PokemonGridItem = ({
	body,
	...props
}) => {
	const pokemonNumber = body["national-pokedex-number"];
	const pokemonName = body["pokemon-name"];
	const imageUrl = "../images/pokemon/sugimori/" + pokemonNumber + ".png";

	return (
		<div className="pokemon-grid-item">
			<img className="sugimori-sprite" src={imageUrl} />
			<h3 className="pokemon-name">{pokemonNumber} {pokemonName}</h3>
		</div>
	);
};

export default PokemonGridItem;