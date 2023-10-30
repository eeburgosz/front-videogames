import { createSlice } from "@reduxjs/toolkit";

export const videogamesSlice = createSlice({
   name: "videogames",
   initialState: {
      isLoading: false,
      allVideogames: [],
      auxAllVideogames: [],
      auxSourceVideogames: [],
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
      setVideogamesBySource: (state, action) => {
         state.allVideogames = action.payload;
         state.auxSourceVideogames = action.payload;
         state.isLoading = false;
      },
      setVideogameByGenres: (state, action) => {
         state.allVideogames = action.payload;
         state.isLoading = false;
      },
      setCombinedFilter: (state, action) => {
         state.allVideogames = action.payload;
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
   setVideogamesBySource,
   setVideogameByGenres,
   setCombinedFilter
} = videogamesSlice.actions;