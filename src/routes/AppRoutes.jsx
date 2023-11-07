import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CheckingAuth } from "../auth";
import { ViewRoutesAuth, ViewRoutes } from "./";
import { useCheckingStatus } from "../hooks";

export const AppRoutes = () => {
	const { status } = useCheckingStatus();
	if (status === "checking") return <CheckingAuth />;

	return (
		<Routes>
			{status === "authenticated" ? (
				<Route path="/*" element={<ViewRoutesAuth />} />
			) : (
				<Route path="/*" element={<ViewRoutes />} />
			)}
			<Route path="/*" element={<Navigate to="/videogames" />} />
		</Routes>
	);
};
