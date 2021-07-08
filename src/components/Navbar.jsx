import { Link } from 'react-router-dom'


export default function Navbar(props) {
    return(
        <nav>
            <Link to="/">
                HOME
            </Link>

            {/* if user is logged in */}
            <Link to="/profile">
                PROFILE
            </Link>

            <Link to="/">
                <span onClick={props.handleLogout}>LOGOUT!</span>
            </Link>

            {/* if user is logged out */}
            <Link to="/login">
                LOGIN!
            </Link>

            <Link to="/register">
                NEW ACCOUNT
            </Link>

        </nav>
    )
}