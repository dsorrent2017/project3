import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "./Logout";


export const NavBar = () => {

    const { currentUser, isAuthenticated } = useSelector(state => state.auth)

    // helper to show links on Navbar if user is authenticated
    const showLinks = () => {
        if (isAuthenticated) {
            return (
                <>
                    <Link to="/dashboard" className="item">{currentUser.email}</Link>



                    <Logout />
                </>
            )
        } else {
            return (
                <>
                    {/* <Link to="/login" className="item">Login</Link> */}
                    <Link to="/register" className="item">Register</Link>
                    <Link to="/reservation" className="item">Reservation</Link>
                    <Link to="/orderonline" className="item">Online Ordering</Link>
                    <Link to="/catering" className="item">Catering</Link>
                    <Link to="/contact" className="item">Contact</Link>
                </>
            )
        }

    }

    return (
        <div className="ui inverted menu">
            <Link to="/" className="item">Home</Link>
            <Link to="/menu" className="item">Menu</Link>
            <Link to="/reservation" className="item">Reservation</Link>
            
            {isAuthenticated ? <Link to="/pageone" className="item">Page One</Link> : ""}
            {isAuthenticated ? <Link to="/menu" className="item">Menu</Link> : ""}
            <div className="right menu">
                {showLinks()}
            </div>
        </div>
    )
}

export default NavBar;
