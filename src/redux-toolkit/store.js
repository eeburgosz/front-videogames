import { configureStore } from "@reduxjs/toolkit";
import { videogamesSlice } from "./videogames/videogamesSlice";
import { authSlice } from "./auth/authSlice";

export const store = configureStore({
	reducer: {
		videogames: videogamesSlice.reducer,
		auth: authSlice.reducer,
	},
});
