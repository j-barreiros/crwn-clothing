// Hooks
import { useState } from "react";

// Firebase
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

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
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input
                    type="text"
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                    placeholder="Display Name"
                    required
                />

                <label>Email</label>
                <input
                    type="email"
                    onChange={handleChange}
                    name="email"
                    placeholder="Email"
                    value={email}
                    required
                />

                <label>Password</label>
                <input
                    type="password"
                    onChange={handleChange}
                    name="password"
                    placeholder="password"
                    value={password}
                    required
                />

                <label>Confirm Password</label>
                <input
                    type="password"
                    onChange={handleChange}
                    name="confirmPassword"
                    placeholder="confirm password"
                    value={confirmPassword}
                    required
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm;