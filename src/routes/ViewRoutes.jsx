import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AbaoutMe, DetailView, HomeView, LandingPage } from "../views";
import { AuthRoutes } from "./";

export const ViewRoutes = () => {
	return (
		<Routes>
			<Route exact path="/" element={<LandingPage />} />
			<Route path="/videogames" element={<HomeView />} />
			<Route path="/videogame/:id" element={<DetailView />} />
			<Route path="/auth/*" element={<AuthRoutes />} />
			<Route path="/aboutMe" element={<AbaoutMe />} />
			<Route path="/*" element={<Navigate to="/videogames" />} />
		</Routes>
	);
};
