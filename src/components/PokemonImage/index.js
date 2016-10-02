import React from 'react';
import ReactDOM from 'react-dom';

const PokemonImage = ({
	spriteUrl,
	...props
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

export default PokemonImage;