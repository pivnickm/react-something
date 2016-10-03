import React from 'react'
import ReactDOM from 'react-dom';
import PokemonImageContainer from '../PokemonImageContainer'
import PokemonGridItem from '../PokemonGridItem'
import $ from 'jquery';
import { Router, Route, Link } from 'react-router'

import './styles.less'

class PokemonContainer extends React.Component {
	constructor() {
		super();
		this.state = { data: {} };
		this.getPokemon = this.getPokemon.bind(this);
	}
	getPokemon() {
		const pokeUrl = 'https://www.tablerig.com/tables/calpaterson/pokemon-with-images';

		$.ajax({
			url: pokeUrl,
			dataType: 'json',
			cache: true,
			success: data => {
				console.log(data)
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
		if (!this.state.data.approximate_number_of_rows) {
			return (
				<div className="loader-info">
					<div className="spinner"></div>
					<div className="loading">Loading...</div>
				</div>
			);
		} else {
			const pokemonItem = this.state.data.body
				.sort((a, b) => a["national-pokedex-number"] - b["national-pokedex-number"])
				.map(info => {
					const pokemonNumber = info["national-pokedex-number"];
					return (
						<Link key={pokemonNumber} to={`/pokemon/${pokemonNumber}`}>
							<PokemonGridItem key={pokemonNumber} body={info} />
						</Link>
					);
				});
			return (
				<div className="pokemon-grid">
					{pokemonItem}
				</div>
			);
		}
	}
};

export default PokemonContainer