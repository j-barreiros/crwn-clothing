import AuthContainer from "./authentication.styles";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {
    

    return (
        <AuthContainer>
            <SignInForm />
            <SignUpForm />
        </AuthContainer>
        
    )
}

export default Authentication;