import React, { PropTypes } from 'react';
import PokemonImageContainer from '../PokemonImageContainer'
import PokemonStats from '../PokemonStats'
import $ from 'jquery';
import { Link } from 'react-router'

import './styles.less'

class PokemonContainer extends React.Component {
	constructor() {
		super();
		this.state = { data: {} };
		this.getPokemon = this.getPokemon.bind(this);
	}
	getPokemon() {
		const pokeUrl = `http://pokeapi.co/api/v2/pokemon/${this.props.params.pokedexNumber}`;
		$.ajax({
			url: pokeUrl,
			dataType: 'json',
			cache: true,
			success: data => {
				console.log(data);
				this.setState({ data:data });
			},
			error: (xhr, status, err) => {
				console.error(this.props.url, status, err.toString());
			}
		});
	}
	componentDidMount() {
		this.getPokemon();
	}

	render() {
		if (!this.state.data.name) {
			return (
				<div className="loader-info">
					<div className="spinner"></div>
					<div className="loading">Loading...</div>
				</div>
			);
		} else {
			return (
				<div className="pokemon">
					<Link to="/">Home</Link>
					<PokemonStats
						name={this.state.data.name}
						id={this.state.data.id}
					/>
					<PokemonImageContainer sprites={this.state.data.sprites} />
				</div>
			);
		}
	}
}

PokemonContainer.propTypes = {
	params: PropTypes.object,
	url: PropTypes.string
};

export default PokemonContainer