import axios from "axios";
import {
	setAllGenres,
	setAllVideogames,
	setFilterByRating,
	setFilterBySort,
	setFilterBySourceAndGenres,
	setVideogameById,
	setVideogamesByName,
	startLoading,
} from "./videogamesSlice";

import {
	filterByRating,
	filterBySort,
	filterBySourceAndGenres,
} from "./../../utils/filters";

// const URL=""
// const URL = "http://localhost:3001";
const URL = "https://backvideogames-2jow.onrender.com";

export const getAllVideogames = () => {
	return async (dispatch) => {
		dispatch(startLoading());
		try {
			const { data } = await axios.get(`${URL}/videogames`);
			dispatch(setAllVideogames(data));
		} catch (error) {
			dispatch(setAllVideogames([]));
			throw new Error({ message: error.message });
		}
	};
};

export const getVideogameById = (id) => {
	return async (dispatch) => {
		dispatch(startLoading());
		try {
			const { data } = await axios.get(`${URL}/videogame/${id}`);
			dispatch(setVideogameById(data));
		} catch (error) {
			throw new Error({ message: error.message });
		}
	};
};

export const getVideogamesByName = (name) => {
	return async (dispatch) => {
		dispatch(startLoading());
		try {
			const { data } = await axios.get(`${URL}/videogames?name=${name}`);
			dispatch(setVideogamesByName(data));
		} catch (error) {
			dispatch(setVideogamesByName([]));
		}
	};
};

export const getGenres = () => {
	return async (dispatch) => {
		dispatch(startLoading());
		try {
			const { data } = await axios.get(`${URL}/genres`);
			dispatch(setAllGenres(data));
		} catch (error) {
			throw new Error({ message: error.message });
		}
	};
};

export const getFilterBySourceAndGenres = (source, genres) => {
	return async (dispatch, getState) => {
		dispatch(startLoading());
		const { auxAllVideogames } = getState().videogames;
		try {
			const filtered = filterBySourceAndGenres(
				auxAllVideogames,
				source,
				genres
			);
			dispatch(setFilterBySourceAndGenres(filtered));
		} catch (error) {
			throw new Error({ message: error.message });
		}
	};
};

export const getFilterBySort = (payload) => {
	return async (dispatch, getState) => {
		dispatch(startLoading());
		const { allVideogames } = getState().videogames;
		try {
			const filtered = filterBySort(allVideogames, payload);
			dispatch(setFilterBySort(filtered));
		} catch (error) {
			throw new Error({ message: error.message });
		}
	};
};

export const getFilterByRating = (payload) => {
	return async (dispatch, getState) => {
		dispatch(startLoading());
		const { allVideogames } = getState().videogames;
		try {
			const filtered = filterByRating(allVideogames, payload);
			dispatch(setFilterByRating(filtered));
		} catch (error) {
			throw new Error({ message: error.message });
		}
	};
};

export const postVideogame = (payload) => {
	return async (dispatch) => {
		dispatch(startLoading());
		const {
			name,
			img,
			description,
			released,
			genres,
			platforms,
			ratings,
			requirements,
			created,
		} = payload;
		try {
			const postData = {
				name,
				img,
				description,
				released,
				genres: genres.map((genre) => genre.name),
				platforms,
				ratings,
				requirements,
				created,
			};
			await axios.post(`${URL}/videogame/create`, postData);
		} catch (error) {
			throw new Error({ message: error.message });
		}
	};
};
