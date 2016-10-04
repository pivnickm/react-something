import React, { PropTypes } from 'react';
import PokemonGridItem from '../../components/PokemonGridItem'
import $ from 'jquery';
import { Link } from 'react-router'

import './styles.less'

class PokemonGrid extends React.Component {
	constructor() {
		super();
		this.state = {
			data: {},
			fetching: true
		};
		this.getPokemon = this.getPokemon.bind(this);
	}
	getPokemon(url) {
		const pokeUrl = url || 'http://pokeapi.co/api/v2/pokemon/';

		this.setState({ fetching: true });
		$.ajax({
			url: pokeUrl,
			dataType: 'json',
			cache: true,
			success: data => {
				console.log(data)
				this.setState({
					data: data,
					fetching: false
				});
			},
			error: (xhr, status, err) => {
				console.error(this.props.url, status, err.toString());
			}
		});
	}
	nextClick(nextPage) {
		this.getPokemon(nextPage);
	}
	prevClick(previousPage) {
		this.getPokemon(previousPage);
	}
	componentDidMount() {
		this.getPokemon();
	}

	render() {
		if (this.state.fetching) {
			return (
				<div className="loader-info">
					<div className="spinner"></div>
					<div className="loading">Loading...</div>
				</div>
			);
		} else {
			const pokemonItem = this.state.data.results.map(info => {
					const pokemonNumber = info.url.split('/').filter(Boolean)[5];
					const pokemonName = info.name;
					return (
						<Link key={pokemonNumber} to={`/pokemon/${pokemonNumber}`}>
							<PokemonGridItem
								key={pokemonNumber}
								number={pokemonNumber}
								name={pokemonName}
							/>
						</Link>
					);
				});
			return (
				<div>
					<div className="pokemon-grid">
						{pokemonItem}
					</div>
					<span onClick={this.prevClick.bind(this, this.state.data.previous)} className="pagination previous">Previous</span>
					<span onClick={this.nextClick.bind(this, this.state.data.next)} className="pagination next">Next</span>
				</div>
			);
		}
	}
}

PokemonGrid.propTypes = {
	url: PropTypes.string
};

export default PokemonGrid;