import React, { PropTypes } from 'react';

import './style.less'

const PokemonGridItem = ({
	number,
	name
}) => {
	const imageUrl = `../images/pokemon/sugimori/${number}.png`;

	return (
		<div className="pokemon-grid-item">
			<img className="sugimori-sprite" src={imageUrl} />
			<h3 className="pokemon-name">{number} {name}</h3>
		</div>
	);
};

PokemonGridItem.propTypes = {
	name: PropTypes.string,
	number: PropTypes.string
};

export default PokemonGridItem;