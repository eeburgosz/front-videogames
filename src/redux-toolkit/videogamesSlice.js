import { createSlice } from "@reduxjs/toolkit";

export const videogamesSlice = createSlice({
   name: "videogames",
   initialState: {
      isLoading: false,
      allVideogames: [],
      auxAllVideogames: [],
      videogame: {}
   },
   reducers: {
      startLoading: (state) => {
         state.isLoading = true;
      },
      setAllVideogames: (state, action) => {
         state.allVideogames = action.payload;
         state.auxAllVideogames = action.payload;
         state.isLoading = false;
      }
   }
});

export const {
   startLoading,
   setAllVideogames
} = videogamesSlice.actions;