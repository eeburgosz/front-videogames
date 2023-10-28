import React from "react";
import { Route, Routes } from "react-router-dom";
import { ViewRoutes } from "./ViewRoutes";
import { LandingPage } from "../views";

export const AppRoutes = () => {
	return (
		<div>
			<Routes>
				<Route exact path="/" element={<LandingPage />} />
				<Route path="/*" element={<ViewRoutes />} />
			</Routes>
		</div>
	);
};