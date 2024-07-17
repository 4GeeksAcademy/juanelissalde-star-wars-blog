import React, { useEffect, useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {

	const url = "https://swapi.dev/api";

	// const [character, setCharacter] = useState([]);
	// const [planet, setPlanet] = useState([]);

	return {
		store: {
			characters: [],
			character: {},

			planets: [],
			planet: {},

			favorites: []
		},
		actions: {
			// Obtener personajes----------------------------------
			getCharacters: async () => {
				try {
					let response = await fetch(`${url}/people/`);
					let data = await response.json();
					setStore({ characters: data.results });
					return true;
				} catch (error) {
					console.log(error)
					return false;
				}
			},
			getCharacterDetail: async (id) => {
				try {
					let response = await fetch(`${url}/people/${id}`);
					let data = await response.json();
					setStore({ character: data });
					return true;
				} catch (error) {
					console.log(error)
					return false;
				}
			},
			// Obtener planetas----------------------------------
			getPlanets: async () => {
				try {
					let response = await fetch(`${url}/planets/`);
					let data = await response.json();
					setStore({ planets: data.results });
					return true;
				} catch (error) {
					console.log(error)
					return false;
				}
			},
			getPlanetDetail: async (id) => {
				try {
					let response = await fetch(`${url}/planets/${id}`);
					let data = await response.json();
					setStore({ planet: data });
					return true;
				} catch (error) {
					console.log(error)
					return false;
				}
			},
			addFavorite: (name, type) => {
				const actions = getActions();
				const store = getStore();
				let isFavorite = actions.favoriteExist(name)
				console.log(isFavorite);
				if (!isFavorite) {
					setStore({ favorites: [...store.favorites, { name: name, type: type }] })
				}
			},
			deleteFavorite: (name) => {
				const store = getStore();
				setStore({ favorites: store.favorites.filter(item => item.name != name) })
			},

			favoriteExist: (name) => {
				const actions = getActions();
				const store = getStore();
				let isFavorite = store.favorites.some(item => item.name == name)
				if (isFavorite) {
					actions.deleteFavorite(name)
					return true
				}
				return false
			}
		}
	};
};

export default getState;
