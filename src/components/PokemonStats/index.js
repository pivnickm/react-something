import React, { PropTypes } from 'react';

import './style.less'

const PokemonStats = ({
	name,
	id
}) => {
	return (
		<div className="pokemon-info">
			<h2 className="pokemon-name">#{id} {name}</h2>
			<span className="pokemon-number"></span>
		</div>
	);
};

PokemonStats.propTypes = {
	name: PropTypes.string,
	id: PropTypes.number
};

export default PokemonStats;