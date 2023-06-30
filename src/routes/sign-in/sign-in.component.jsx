import { useEffect } from "react";

import { getRedirectResult } from "firebase/auth";

import {
    auth,
    signWithGooglePopup,
    signWithGoogleRedirect,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
    
    useEffect(() => {
        const checkAuth = async () => {
            const response = await getRedirectResult(auth);
            if (response) {
                await createUserDocumentFromAuth(response.user);
            }
        }
        checkAuth();
    }, []);

    const loginGoogleUserPopup = async () => {
        const {user} = await signWithGooglePopup();
        createUserDocumentFromAuth(user);  
    }

    const loginGoogleUserRedirect = async () => {
        const user = await signWithGoogleRedirect();
        createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign in</h1>
            <button onClick={loginGoogleUserPopup}>Log in</button>
            <button onClick={loginGoogleUserRedirect}>Log in with Redirect</button>
            <SignUpForm />
        </div>
        
    )
}

export default SignIn;