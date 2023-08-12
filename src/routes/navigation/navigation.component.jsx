// React
import { Fragment, useContext } from "react";

// React Router
import { Outlet, Link, NavLink } from "react-router-dom";

import CartIcon from "../../components/cart-icon/card-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";

// Context
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

// Firebase Util
import { signOutUser } from "../../utils/firebase/firebase.utils";


// Logo
import { ReactComponent as CrwnLogo} from "../../assets/crown.svg";

// Style
import {LogoContainer, NavigationContainer, NavLinksContainer} from "./navigation.styles";

const Navigation = () => {

    const {currentUser} = useContext(UserContext);  
    const {isCartOpen} = useContext(CartContext);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrwnLogo className="logo"/>
                </LogoContainer>
                <NavLinksContainer>
                    <Link className="nav-link" to='/shop'>SHOP</Link>
                    {
                        currentUser ?
                        <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                        :
                        <NavLink to='/authentication'>SIGN IN</NavLink>
                    }
                    <CartIcon />
                </NavLinksContainer>
                {isCartOpen && <CartDropDown />}

            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;