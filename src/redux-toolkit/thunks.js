import axios from "axios";
import { setAllGenres, setAllVideogames, setCombinedFilter, setVideogameByGenres, setVideogameById, setVideogamesByName, setVideogamesBySource, startLoading } from "./videogamesSlice";
import { combinedFilter, filterByGenres, filterBySource } from "../utils/filters";

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
         console.log(data);
         dispatch(setVideogamesByName(data));
      } catch (error) {
         console.log({ message: error.message });
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

export const getFilterBySource = (source) => {
   return async (dispatch, getState) => {
      dispatch(startLoading());
      const { auxAllVideogames } = getState().videogames;
      try {
         if (source !== "ALL") {
            const videogames = filterBySource(source, auxAllVideogames);
            return dispatch(setVideogamesBySource(videogames));
         }
         return dispatch(setVideogamesBySource(auxAllVideogames));
      } catch (error) {
         throw new Error({ message: error.message });
      }
   };
};

export const getFilterByGenres = (payload) => {
   return async (dispatch, getState) => {
      dispatch(startLoading());
      try {
         const { auxSourceVideogames, auxAllVideogames } = getState().videogames;
         const filtered = filterByGenres(auxSourceVideogames, payload);
         if (filtered.length > 0) dispatch(setVideogameByGenres(filtered));
         else dispatch(setVideogameByGenres(auxAllVideogames));
      } catch (error) {
         throw new Error({ message: error.message });
      }
   };
};

export const getCombinedFilters = (payload) => {
   return async (dispatch, getState) => {
      const { allVideogames } = getState().videogames;
      try {
         const filteredVideogames = combinedFilter(allVideogames, payload);
         dispatch(setCombinedFilter(filteredVideogames));
      } catch (error) {
         throw new Error({ message: error.message });
      }

   };
   // return async (dispatch, getState) => {
   //    const { allVideogames } = getState().videogames;
   //    // console.log(allVideogames);
   //    const filteredVideogames = combinedFilter(allVideogames, payload);
   //    console.log(filteredVideogames);
   // };
};