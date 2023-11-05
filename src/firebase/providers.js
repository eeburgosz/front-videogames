import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
		const errorMessage = error.message;
		return {
			ok: false,
			errorMessage,
		};
	}
};
