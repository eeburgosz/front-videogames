import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CreateView, DetailView, HomeView } from "../views";

export const AppRoutes = () => {
	return (
		<div>
			<Routes>
				<Route exact path="/videogames" element={<HomeView />} />
				<Route path="/videogame/:id" element={<DetailView />} />
				<Route path="/create" element={<CreateView />} />

				<Route path="/*" element={<Navigate to={"/videogames"} />} />
			</Routes>
		</div>
	);
};
