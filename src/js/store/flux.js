const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: []
		},
		actions: {
			// url: `https://swapi.dev/api`,

			// const getCharacters: async () => {
			// 	let response = await fetch(`${url}/people/`);
			// 	let data = response.json();
			// 	console.log(data);
			// },
			// getCharacters
		}
	};
};

export default getState;
