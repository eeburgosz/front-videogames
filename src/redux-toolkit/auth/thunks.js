import { signInWithGithub, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = ({ email, password }) => {
	return async (dispatch) => {
		dispatch(checkingCredentials());
		console.log(email);
		console.log(password);
	};
};

export const checkingAuthenticationWithGoogle = () => {
	return async (dispatch) => {
		dispatch(checkingCredentials());
		const result = await signInWithGoogle();
		console.log(result);
		if (!result.ok) return dispatch(logout(result));
		dispatch(login(result));
	};
};

export const checkingAuthenticationWithGithub = () => {
	return async (dispatch) => {
		dispatch(checkingCredentials());
		const result = await signInWithGithub();
	};
};
