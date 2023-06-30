import { useState } from "react";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassworrd: '',
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);

    const { displayName, email, password, confirmPassworrd } = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={() => { }}>
                <label>Display Name</label>
                <input
                    type="text"
                    onChange={(event) => handleChange(event)}
                    name="dispalyName"
                    value={displayName}
                    placeholder="Display Name"
                    required
                />

                <label>Email</label>
                <input
                    type="email"
                    onChange={(event) => handleChange(event)}
                    name="email"
                    placeholder="Email"
                    value={email}
                    required
                />

                <label>Password</label>
                <input
                    type="password"
                    onChange={(event) => handleChange(event)}
                    name="password"
                    placeholder="password"
                    value={password}
                    required
                />

                <label>Confirm Password</label>
                <input
                    type="password"
                    onChange={(event) => handleChange(event)}
                    name="confirmPassword"
                    placeholder="confirm password"
                    value={confirmPassworrd}
                    required
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm;