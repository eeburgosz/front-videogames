import {
	loginWithEmailAndPassword,
	registerUserWithEmailAndPassword,
	signInWithGithub,
	signInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = () => {
	return async (dispatch) => {
		dispatch(checkingCredentials());
	};
};

export const checkingAuthenticationWithGoogle = () => {
	return async (dispatch) => {
		dispatch(checkingCredentials());
		const result = await signInWithGoogle();
		if (!result.ok) return dispatch(logout(result));
		dispatch(login(result));
	};
};

export const checkingAuthenticationWithGithub = () => {
	return async (dispatch) => {
		dispatch(checkingCredentials());
		const result = await signInWithGithub();
		if (!result.ok) return dispatch(logout(result));
		dispatch(login(result));
	};
};

export const startRegisteringWithEmailAndPassword = (email, password) => {
	return async (dispatch) => {
		dispatch(checkingCredentials());
		const result = await registerUserWithEmailAndPassword(email, password);
		if (!result.ok) return dispatch(logout(result));
		dispatch(login(result));
	};
};

export const startLoginWithEmailAndPassword = ({ email, password }) => {
	return async (dispatch) => {
		dispatch(checkingCredentials());
		const result = await loginWithEmailAndPassword(email, password);
		if (!result.ok) return dispatch(logout(result));
		dispatch(login(result));
	};
};
