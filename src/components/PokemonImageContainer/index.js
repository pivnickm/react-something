import React from 'react'
import ReactDOM from 'react-dom';
import PokemonImage from '../PokemonImage'

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
	console.log('sprites', spriteNodes);
	return (
		<div className="pokeonSprites">
			{spriteNodes}
		</div>
	);
};

export default PokemonImageContainer