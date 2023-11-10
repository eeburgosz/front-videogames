import {
	GithubAuthProvider,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	// updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProveider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
	try {
		const result = await signInWithPopup(FirebaseAuth, googleProveider);
		//! Puedo usar esto para verificar en el backend.. Aquí trae el idToken-------
		const { accessToken, idToken } =
			GoogleAuthProvider.credentialFromResult(result);
		//! -------------------------------------------------------------------------------
		const { displayName, email, uid, photoURL } = result.user;
		return {
			ok: true,
			//User info
			displayName,
			email,
			uid,
			photoURL,
			//Aditional info
			accessToken,
			idToken,
		};
	} catch (error) {
		// const errorCode= error.errorCode
		return {
			ok: false,
			errorMessage: error.message,
		};
	}
};

const githubProvider = new GithubAuthProvider();

export const signInWithGithub = async () => {
	try {
		const result = await signInWithPopup(FirebaseAuth, githubProvider);
		const { accessToken } = GithubAuthProvider.credentialFromResult(result);
		const { displayName, email, uid, photoURL } = result.user;
		return {
			ok: true,
			displayName,
			email,
			uid,
			photoURL,
			accessToken,
		};
	} catch (error) {
		return {
			ok: false,
			errorMessage: error.message,
		};
	}
};

export const registerUserWithEmailAndPassword = async (
	email,
	password /*, displayName */
) => {
	try {
		const result = await createUserWithEmailAndPassword(
			FirebaseAuth,
			email,
			password
		);
		const { photoURL, uid } = result.user;
		//! Si en el formulario pongo un username mandado como displayName, se puede actualizar de la siguiente manera. Queda comentado.
		// await updateProfile(FirebaseAuth.currentUser, {displayName})
		//! En este caso en particular no lo hago porque mi formulario de registro solo tiene email y password.
		return {
			ok: true,
			email,
			uid,
			photoURL,
		};
	} catch (error) {
		const errorMessage = error.message;
		return {
			ok: false,
			errorMessage,
		};
	}
};

export const loginWithEmailAndPassword = async (mail, password) => {
	try {
		const result = await signInWithEmailAndPassword(
			FirebaseAuth,
			mail,
			password
		);
		const { photoURL, uid, email } = result.user;
		return {
			ok: true,
			email, //! Mandé este email para que llegue toda la info al mismo tiempo y se renderice todo por igual
			uid,
			photoURL,
		};
	} catch (error) {
		return {
			ok: false,
			errorMessage: error.message,
		};
	}
};

export const logoutFirebase = async () => {
	return await FirebaseAuth.signOut();
};
