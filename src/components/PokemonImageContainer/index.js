import React from 'react'
import ReactDOM from 'react-dom';
import PokemonImage from '../PokemonImage'

import './style.less'

const PokemonImageContainer = ({
	sprites,
	...props
}) => {
	const spriteNodes = Object.keys(sprites).map(function(spriteName) {
		const url = sprites[spriteName];
		return (
			<PokemonImage key={spriteName} spriteUrl={url} />
		);
	});
	return (
		<div className="pokeon-sprites-wrapper">
			<div className="pokeon-sprites">
				{spriteNodes}
			</div>
		</div>
	);
};

export default PokemonImageContainer