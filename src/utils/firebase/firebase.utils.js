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
    onAuthStateChanged,
} from "firebase/auth"
// Firebase FireStore
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    await batch.commit();
    console.log("done batch")
}


export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db,'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q)
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const {title, items} = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap;
}

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

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)