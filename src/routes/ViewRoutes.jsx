import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { DetailView, HomeView, LandingPage } from "../views";
import { AuthRoutes } from "./AuthRoutes";

export const ViewRoutes = () => {
	return (
		<Routes>
			<Route exact path="/" element={<LandingPage />} />
			<Route path="/videogames" element={<HomeView />} />
			<Route path="/videogame/:id" element={<DetailView />} />
			<Route path="/auth/*" element={<AuthRoutes />} />
			<Route path="/*" element={<Navigate to="/videogames" />} />
		</Routes>
	);
};
