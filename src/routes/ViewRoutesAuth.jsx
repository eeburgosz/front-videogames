import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CreateView, DetailView, HomeView, LandingPage } from "../views";

export const ViewRoutesAuth = () => {
	return (
		<Routes>
			<Route exact path="/" element={<LandingPage />} />
			<Route path="/videogames" element={<HomeView />} />
			<Route path="/videogame/:id" element={<DetailView />} />
			<Route path="/create" element={<CreateView />} />
			<Route path="/*" element={<Navigate to="/videogames" />} />
		</Routes>
	);
};
