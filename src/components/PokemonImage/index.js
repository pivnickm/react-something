import React, { PropTypes } from 'react';

const PokemonImage = ({
	spriteUrl
}) => {
	if (spriteUrl === null) {
		return (
			<div></div>
		);
	} else {
		return (
			<div className="sprite">
				<img src={spriteUrl} />
			</div>
		);
	}
};

PokemonImage.propTypes = {
	spriteUrl: PropTypes.string
};

export default PokemonImage;