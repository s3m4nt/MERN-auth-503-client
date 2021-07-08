import { Link } from 'react-router-dom'


export default function Navbar(props) {
    // console.log('props of NAVBAR',props);
    // if user is logged in
    const loggedIn = (
        <>
            {/* if user is logged in */}
            <Link to="/profile">
                PROFILE! --
            </Link>

            <Link to="/">
                <span onClick={props.handleLogout}>LOGOUT! -- </span>
            </Link>
        </>
    )

    // if user is logged out
    const loggedOut = (
        <>
            {/* if user is logged out */}
            <Link to="/login">
                LOGIN! --
            </Link>

            <Link to="/register">
                NEW ACCOUNT! --
            </Link>
        </>
    )

    return(
        <nav>
            <Link to="/">
                HOME -- 
            </Link>

            {props.currentUser ? loggedIn : loggedOut}
            
        </nav>
    )
}