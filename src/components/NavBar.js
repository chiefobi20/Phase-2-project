import { NavLink } from "react-router-dom"

function NavBar(){
    return(
        <nav className="nav-tabs">
            <ul className="ul-nav">
                <li className="my-tabs">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="my-tabs">
                    <NavLink to="/add-workout">Add Workout</NavLink>
                </li>
                <li className="my-tabs">
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
