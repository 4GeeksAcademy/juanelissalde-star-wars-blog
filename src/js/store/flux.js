import React, { useEffect, useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {

	const url = "https://swapi.dev/api";
	const api = "https://humble-couscous-44jxq4rw6jjf5j7r-3000.app.github.dev/"

	// const [character, setCharacter] = useState([]);
	// const [planet, setPlanet] = useState([]);

	return {
		store: {
			characters: [],
			character: {},

			planets: [],
			planet: {},

			vehicles: [],
			vehicle: {},

			favorites: []
		},
		actions: {
			// Obtener personajes----------------------------------
			getCharacters: async () => {
				try {
					let response = await fetch(`${api}characters`);
					let data = await response.json();
					setStore({ characters: data });
					return true;
				} catch (error) {
					console.log(error)
					return false;
				}
			},
			getCharacterDetail: async (id) => {
				try {
					let response = await fetch(`${api}/character/${id}`);
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
					let response = await fetch(`${api}planets`);
					let data = await response.json();
					setStore({ planets: data });
					return true;
				} catch (error) {
					console.log(error)
					return false;
				}
			},
			getPlanetDetail: async (id) => {
				try {
					let response = await fetch(`${api}/planets/${id}`);
					let data = await response.json();
					setStore({ planet: data });
					return true;
				} catch (error) {
					console.log(error)
					return false;
				}
			},
			// Obtener vehiculos----------------------------------
			getVehicles: async () => {
				try {
					let response = await fetch(`${api}vehicles`);
					let data = await response.json();
					setStore({ vehicles: data });
					return true;
				} catch (error) {
					console.log(error)
					return false;
				}
			},
			getVehicleDetail: async (id) => {
				try {
					let response = await fetch(`${api}/vehicle/${id}`);
					let data = await response.json();
					setStore({ vehicle: data });
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
