// Firebase
import { initializeApp } from "firebase/app";

// Firebase Auth
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth"
// Firebase FireStore
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from "firebase/firestore";

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
export const signWithGoogleRedirect = () => signInWithRedirect(auth, provider);

// Firestore
export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);