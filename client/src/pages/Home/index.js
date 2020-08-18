import React from 'react'
import { Header, Message, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Home = () => {
    // access to the isAuthenticated property from the auth reducer state
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const showLoginBtn = () => {
        if (!isAuthenticated) {
            return (
                <Button color="black" animated secondary>
                    <Button.Content visible>Login</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
            )
        }
    }

    return (
    
    <div id="background-home" className="container-fluid">
      
      <div className="row"/>
        <div className="col-sm-3"> </div>
        <div className="col-sm-6"/>
          <div className="home-title-backg">
          <h1 className="home-title">Bella Italia</h1>
          <br></br>
          <h2 className="home-title">America's Italy</h2>
          <br></br>
         </div>
</div>
    )
};

export default Home;
