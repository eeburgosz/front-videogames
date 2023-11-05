import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CreateView, DetailView, HomeView } from "../views";
import { AuthRoutes } from "./AuthRoutes";

export const ViewRoutes = () => {
	return (
		<div>
			<Routes>
				<Route exact path="/videogames" element={<HomeView />} />
				<Route path="/videogame/:id" element={<DetailView />} />
				<Route path="/create" element={<CreateView />} />

				<Route path="/auth/*" element={<AuthRoutes />} />

				<Route path="/*" element={<Navigate to={"/videogames"} />} />
			</Routes>
		</div>
	);
};
