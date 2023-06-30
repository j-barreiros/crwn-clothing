// Styles
import "./sign-up-form.styles.scss";

// Hooks
import { useState } from "react";

// Firebase
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);

    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password != confirmPassword) return;


        try {
            const {user} = await createAuthUserWithEmailAndPassword( email, password);
            
            await createUserDocumentFromAuth(user, {displayName});
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput 
                    label="Display Name"
                    inputOptions={{
                        type:"text",
                        onChange:handleChange,
                        name:"displayName",
                        value:displayName,
                        required:true,
                    }}
                />

                <FormInput 
                    label="Email"
                    inputOptions={{
                        type:"email",
                        onChange:handleChange,
                        name:"email",
                        value:email,
                        required:true,
                    }}
                />

                <FormInput 
                    label="Password"
                    inputOptions={{
                        type:"password",
                        onChange:handleChange,
                        name:"password",
                        value:password,
                        required:true,
                    }}
                />

                <FormInput 
                    label="Confirm Password"
                    inputOptions={{
                        type:"password",
                        onChange:handleChange,
                        name:"confirmPassword",
                        value:confirmPassword,
                        required:true,
                    }}
                />

                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default SignUpForm;