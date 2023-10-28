import { configureStore } from "@reduxjs/toolkit";
import { videogamesSlice } from "./videogamesSlice";

export const store = configureStore({
   reducer: {
      videogames: videogamesSlice.reducer
   }
});