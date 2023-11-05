import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import { Signup } from "../auth/components/Signup";
import { LoginPage } from "./../auth/components/login/LoginPage";
import { RegisterPage } from "./../auth/components/register/RegisterPage";

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
