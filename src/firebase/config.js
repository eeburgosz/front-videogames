// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth"; //!
import { getFirestore } from "firebase/firestore/lite"; //!

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCbGiIdWXiSkOZGT5ArfxwiJxRPNBbMNCE",
	authDomain: "videogames-app-f83cc.firebaseapp.com",
	projectId: "videogames-app-f83cc",
	storageBucket: "videogames-app-f83cc.appspot.com",
	messagingSenderId: "903587330246",
	appId: "1:903587330246:web:1b4beaed8f7c0344a13fc7",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp); //!
export const FirebaseDb = getFirestore(FirebaseApp); //!
