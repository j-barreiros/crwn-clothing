// React
import { Fragment } from "react";

// React Router
import { Outlet, Link } from "react-router-dom";

// Logo
import { ReactComponent as CrwnLogo} from "../../assets/crown.svg";

// Styles
import "./navigation.styles.scss";

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>SHOP</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;