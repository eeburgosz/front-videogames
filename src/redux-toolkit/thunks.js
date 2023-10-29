import axios from "axios";
import { setAllVideogames, setVideogameById, startLoading } from "./videogamesSlice";

// const URL=""
const URL = "http://localhost:3001";

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