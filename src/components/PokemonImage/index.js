import React, { PropTypes } from 'react';

const PokemonImage = ({
	spriteUrl,
	spriteName
}) => {
	if (spriteUrl === null) {
		return (
			<div></div>
		);
	} else {
		console.log('spriteName', spriteName)
		return (
			<div className="sprite">
				<img src={spriteUrl} alt={spriteName}/>
				<span>{spriteName}</span>
			</div>
		);
	}
};

PokemonImage.propTypes = {
	spriteUrl: PropTypes.string,
	spriteName: PropTypes.string
};

export default PokemonImage;