const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlApi: `https://swapi.dev/api/people`,
			characters: [],
			//singleCharacter: [],
			planets: [],

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
			singleCharacter: async (id) => {
				try {
					const { urlApi } = getStore();
					const response = await fetch(urlApi, {
						method: "GET"
					});
					if (!response.ok) {
						throw Error("error al obtener un solo personaje")
					}
					const data = await response.json();
					return data.results;
				} catch (error) {
					console.log(error);
				}
			}
		}
	}
};


export default getState;
