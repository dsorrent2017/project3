import React, { useEffect } from 'react'
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import { useDispatch } from "react-redux";
import { loadUser } from "../actions/authActions";
import NavBar from "./NavBar";
import UserDashboard from "../pages/UserDashboard";
import PageOne from "../pages/PageOne";
import Login from "../pages/Login";

import Menu from "../pages/Menu";
import Reservation from "../pages/Reservation";

import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import NoMatch from "../pages/NoMatch";
import Contact from '../pages/Contact';
import Catering from "../pages/Catering";
import OrderOnline from "../pages/Orderonline";

export const App = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUser());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

return (
            
            <Router history={history}>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Login} />
                  
                    
 
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/menu" exact component={Menu} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/reservation" exact component={Reservation} />
                    <Route path="/catering" exact component={Catering} />
                    <Route path="/orderonline" exact component={OrderOnline} />
                    <PrivateRoute path="/dashboard" component={UserDashboard} />
                    <PrivateRoute path="/pageone" component={PageOne} />
                    <Route component={NoMatch} />
                </Switch>
           </Router>
)     
}


export default App;

