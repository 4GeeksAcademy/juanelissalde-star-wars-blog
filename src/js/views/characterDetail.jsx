import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterDetail = props => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();

	const character = store.character;
	let filmsCounter = store.character.length

	const verifyExist = (name) => {
		return store.favorites.some(item => item.name == name)
	}

	useEffect(() => {
		actions.getCharacterDetail(id)
		filmsCounter
	}, [])

	return (
		<div className="jumbotron col-11 mx-auto">
			<div className="detail-header d-flex align-center justify-content-between">
				<h1 className="display-4 text-white-50">{store.character.name}</h1>
			</div>
			<hr className="my-4" />

			<div className="detail-container mb-3 col-12 d-flex">
				<div className="col-md-4">
					<img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="img-fluid rounded-pill" alt={store.character.name} />
				</div>
				<div className="col-md-8">
					<div className="card-body text-white">
						<h5 className="card-title">{store.character.name}</h5>

						<div className="character-description">
							<p>{character.name} was born in the year 
								{character.birth_year}.
								With a height of {character.height}
								cm and a weight of {character.mass}
								kg, their appearance is unmistakable with their skin color {character.skin_color}
								and eye color {character.eye_color}.
								{character.gender !== 'n/a' && ` Their gender is ${character.gender},`}
								{character.hair_color !== 'n/a' ? ` and they have ${character.hair_color} hair.` : ' and they have no hair.'}
							</p>
							<p>Throughout their adventures, they have appeared in
								{character.films ? character.films.length : 0}
								prominent movies from the Star Wars universe.
								Although they do not use vehicles or spaceships,
								their knowledge and experience make them a crucial asset.
							</p>
							<p>For more information, check the provided link:
								<a target="_blank" href={character.url}>{character.name}</a>.
							</p>
							<button type="button" onClick={() => actions.addFavorite(store.character.name, "C")} className="btn btn-dark rounded-circle">
								<i className={`bi bi-star-fill ${verifyExist(store.character.name) && "text-warning"}`}></i>
							</button>
						</div>
					</div>
				</div>
			</div>

			<Link to="/">
				<span className="btn btn-secondary btn-lg mt-5" href="#" role="button">
					Back home
				</span>
			</Link>
		</div >
	);
};

CharacterDetail.propTypes = {
	match: PropTypes.object
};
