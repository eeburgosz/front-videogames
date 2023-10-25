// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import "firebase/auth";
import 'firebase/firestore';
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCbGiIdWXiSkOZGT5ArfxwiJxRPNBbMNCE",
   authDomain: "videogames-app-f83cc.firebaseapp.com",
   projectId: "videogames-app-f83cc",
   storageBucket: "videogames-app-f83cc.appspot.com",
   messagingSenderId: "903587330246",
   appId: "1:903587330246:web:1b4beaed8f7c0344a13fc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

// Get a list of cities from your database
export const getUsers = async () => {

   try {
      const docRef = (await getDocs(collection(db, "users"))).docs;
      const data = docRef.map(doc => doc.data());
      // console.log("Document written with ID: ", data);

      const docRef2 = (await getDocs(collection(db, "users"))).forEach(doc => console.log(doc.id));
      // const data2 = docRef2.forEach(data => console.log(data));
      // console.log(docRef2);
   } catch (e) {
      console.error("Error adding document: ", e);
   }
};




// const provider = firebase.GoogleAuthProvider();

// firebase.signInWithPopup(provider).then((result) => {
//    const user = result.user;
//    user.getIdToken().then((idToken) => {
//       console.log(idToken);
//    })
//       .catch(error => {
//          console.log(error);
//       });
// });