// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8JB2Xs-zJ1NK5M0htqWOLSjC2MrPNLkM",
  authDomain: "crwn-clothing-db-92bd5.firebaseapp.com",
  projectId: "crwn-clothing-db-92bd5",
  storageBucket: "crwn-clothing-db-92bd5.appspot.com",
  messagingSenderId: "716616304225",
  appId: "1:716616304225:web:7d49368b82e379eefc4c20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Google Auth
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signWithGooglePopup = () => signInWithPopup(auth, provider);