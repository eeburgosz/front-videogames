import { createSlice } from "@reduxjs/toolkit";

export const videogamesSlice = createSlice({
   name: "videogames",
   initialState: {
      isLoading: false,
      allVideogames: [],
      auxAllVideogames: [],
      auxSourceAndGenresVideogames: [],
      videogame: {},
      allGenres: [],
   },
   reducers: {
      startLoading: (state) => {
         state.isLoading = true;
      },
      setAllVideogames: (state, action) => {
         state.allVideogames = action.payload;
         state.auxAllVideogames = action.payload;
         state.isLoading = false;
      },
      setVideogameById: (state, action) => {
         state.videogame = action.payload;
         state.isLoading = false;
      },
      setVideogamesByName: (state, action) => {
         state.allVideogames = action.payload;
         state.isLoading = false;
      },
      setAllGenres: (state, action) => {
         state.allGenres = action.payload;
         state.isLoading = false;
      },
      setFilterBySort: (state, action) => {
         state.allVideogames = action.payload;
         state.isLoading = false;
      },
      setFilterByRating: (state, action) => {
         state.allVideogames = action.payload;
         state.isLoading = false;
      },
      setFilterBySourceAndGenres: (state, action) => {
         state.allVideogames = action.payload;
         state.auxSourceAndGenresVideogames = action.payload;
         state.isLoading = false;
      }
   }
});

export const {
   startLoading,
   setAllVideogames,
   setVideogameById,
   setVideogamesByName,
   setAllGenres,
   setFilterBySourceAndGenres,
   setFilterBySort,
   setFilterByRating
} = videogamesSlice.actions;