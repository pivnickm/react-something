import React from 'react'
import ReactDOM from 'react-dom';
import PokemonImageContainer from '../PokemonImageContainer'
import PokemonStats from '../PokemonStats'
import $ from 'jquery';

class PokemonContainer extends React.Component {
	constructor() {
		super();
		this.state = { data: {} };
		this.getPokemon = this.getPokemon.bind(this);
	}
	getPokemon() {
		$.ajax({
			url: 'http://pokeapi.co/api/v2/pokemon/169',
			dataType: 'json',
			cache: true,
			success: function(data) {
				console.log(data)
				this.setState({ data:data });
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	}
	componentDidMount() {
		this.getPokemon();
	}

	render() {
		if (!this.state.data.name) {
			return (
				<div className="loading">loading...</div>
			);
		} else {
			return (
				<div className="pokemon">
					<PokemonImageContainer sprites={this.state.data.sprites} />
					<PokemonStats
						name={this.state.data.name}
						id={this.state.data.id}
					/>
				</div>
			);
		}
	}
};

export default PokemonContainer