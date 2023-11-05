import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, logout } from "./authSlice";

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
		if (!result) dispatch(logout());
	};
};

export const checkingAuthenticationWithGithub = () => {
	return async (dispatch) => {
		dispatch(checkingCredentials());
	};
};
