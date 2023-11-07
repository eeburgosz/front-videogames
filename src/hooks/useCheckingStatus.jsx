import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../redux-toolkit/auth/authSlice";

export const useCheckingStatus = () => {
	const { status } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		//!Observable de Firebase para verificar si el usuario está activo
		onAuthStateChanged(FirebaseAuth, async (user) => {
			if (!user) return dispatch(logout());
			dispatch(login(user));
		});
		// eslint-disable-next-line
	}, []);
	return {
		status,
	};
};
