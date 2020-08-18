import React from 'react'
import { Header, Message, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Menu = () => {
    // access to the isAuthenticated property from the auth reducer state
    console.log('Menu')
    return (
        <div>
            <p style={{ marginBottom: "5px" }}>FAKE MENU</p>
        </div>
    )
};

export default Menu;
