import axios from "axios";
import { setAllVideogames, startLoading } from "./videogamesSlice";

// const URL=""
const URL = "http://localhost:3001/";

export const getAllVideogames = () => {
   return async (dispatch) => {
      dispatch(startLoading());
      try {
         const { data } = await axios.get(`${URL}videogames`);
         dispatch(setAllVideogames(data));
      } catch (error) {
         dispatch(setAllVideogames([]));
         throw new Error({ message: error.message });
      }
   };
};