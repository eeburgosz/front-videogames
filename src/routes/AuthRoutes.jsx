import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "./../auth/";

export const AuthRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/*" element={<Navigate to={"/auth/login"} />} />
			</Routes>
		</div>
	);
};
