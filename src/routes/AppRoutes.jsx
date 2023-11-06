import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CheckingAuth } from "../auth/components/checkingAuth/CheckingAuth";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../redux-toolkit/auth/authSlice";
import { ViewRoutesAuth } from "./ViewRoutesAuth";
import { ViewRoutes } from "./ViewRoutes";

export const AppRoutes = () => {
	const { status } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		//!Observable de Firebase para verificar si el usuario está activo
		onAuthStateChanged(FirebaseAuth, async (user) => {
			if (!user) return dispatch(logout());
			dispatch(login(user));
		});
	}, []);

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
