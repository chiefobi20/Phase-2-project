import { NavLink } from "react-router-dom"

function NavBar(){
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/add-workout">Add Workout</NavLink>
        </nav>
    )
}

export default NavBar
