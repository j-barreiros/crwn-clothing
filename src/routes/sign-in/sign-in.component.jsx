import {signWithGooglePopup} from "../../utils/firebase/firebase.utils"

const SignIn = () => {
    
    const logGoogleUser = async () => {
        const response = await signWithGooglePopup();
        console.log(response);
    }

    return (
        <div>
            <h1>Sign in</h1>
            <button onClick={logGoogleUser}>Log in</button>
        </div>
    )
}

export default SignIn;