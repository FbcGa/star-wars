import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlApi: `https://swapi.dev/api/people`,
			urlPlanet: `https://swapi.dev/api/planets`,
			characters: [],
			details: [],
			planets: [],
			favorites: [],
			buttonFav: true,
		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacters: async () => {
				try {
					const { urlApi } = getStore();
					const response = await fetch(urlApi, {
						method: "GET"
					});
					if (!response.ok) {
						throw Error("error obtenindo personajes")
					}
					const data = await response.json();
					setStore({ characters: data.results })
				} catch (error) {
					console.log(error);
				}
			},
			getDetails: (element) => {
				const store = getStore();
				if (element.url.split("/")[4] === "people") {
					store.characters.find((character) => character.url == element.url);
					setStore({ details: element })
				}
			},
			getPlanets: async () => {
				try {
					const { urlPlanet } = getStore();
					const response = await fetch(urlPlanet, {
						method: "GET"
					});
					if (!response.ok) {
						throw Error("error obteniendo planetas")
					}
					const data = await response.json();
					setStore({ planets: data.results })
				} catch (error) {
					console.log(error);
				}
			},
			addFavorites: (element) => {
				const { favorites } = getStore();
				const newValor = favorites.filter((favorite) =>
					favorite.name != element.name
				);
				setStore({ favorites: [...newValor, element] })
			},
			deleteFavorites: (element) => {
				const { favorites, buttonFav } = getStore();
				const newValor = favorites.filter((favorite) =>
					favorite.name != element.name
				);
				setStore({ favorites: [...newValor] });
			}
		}
	}
};


export default getState;
