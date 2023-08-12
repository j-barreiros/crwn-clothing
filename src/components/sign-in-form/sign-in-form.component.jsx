// Styles
import SignInContainer from "./sign-in-form.styles";

// Hooks
import { useState} from "react";

// Firebase
import {
    createUserDocumentFromAuth,
    signInAuthWithEmailAndPassword, signWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

// Components
import FormInput from "../form-input/form-input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);

    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInAuthWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password or email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
            }

            if (error.code === "auth/wrong-password") {
                alert('incorrect password');
            }
        }
    }


    const signInWithGoogle = async () => {
        await signWithGooglePopup();
    }

    return (
        <SignInContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label="Email"
                    inputOptions={{
                        type: "email",
                        onChange: handleChange,
                        name: "email",
                        value: email,
                        required: true,
                    }}
                />

                <FormInput
                    label="Password"
                    inputOptions={{
                        type: "password",
                        onChange: handleChange,
                        name: "password",
                        value: password,
                        required: true,
                    }}
                />

                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </SignInContainer>
    )
}

export default SignInForm;