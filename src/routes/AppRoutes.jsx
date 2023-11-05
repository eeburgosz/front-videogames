import React from "react";
import { LandingPage } from "../views";
import { Route, Routes } from "react-router-dom";
import { ViewRoutes } from "./ViewRoutes";

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
