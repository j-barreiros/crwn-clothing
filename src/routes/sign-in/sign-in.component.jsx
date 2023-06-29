import {signWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils"

const SignIn = () => {
    
    const logGoogleUser = async () => {
        const {user} = await signWithGooglePopup();
        createUserDocumentFromAuth(user);  
    }

    return (
        <div>
            <h1>Sign in</h1>
            <button onClick={logGoogleUser}>Log in</button>
        </div>
    )
}

export default SignIn;