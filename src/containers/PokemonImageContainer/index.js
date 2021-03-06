import React, { PropTypes } from 'react';
import PokemonImage from '../../components/PokemonImage'

import './style.less'

const PokemonImageContainer = ({
	sprites
}) => {
	const spriteNodes = Object.keys(sprites).map(spriteName => {
		const url = sprites[spriteName];
		return (
			<PokemonImage key={spriteName} spriteUrl={url} spriteName={spriteName} />
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

PokemonImageContainer.propTypes = {
	sprites: PropTypes.object
};

export default PokemonImageContainer