// React
import { Fragment, useContext } from "react";

// Context
import { UserContext } from "../../contexts/user.context";

// React Router
import { Outlet, Link } from "react-router-dom";

// Logo
import { ReactComponent as CrwnLogo} from "../../assets/crown.svg";

// Styles
import "./navigation.styles.scss";

const Navigation = () => {

    const {currentUser} = useContext(UserContext);

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>SHOP</Link>
                    <Link className="nav-link" to='/authentication'>{currentUser ? 'SIGN OUT' : 'SIGN IN'}</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;