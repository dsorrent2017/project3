import React, { useEffect } from 'react'
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import { useDispatch } from "react-redux";
import { loadUser } from "../actions/authActions";
import NavBar from "./NavBar";

import Home from "../pages/Home";
import Menu from "../pages/Menu";
<<<<<<< HEAD
// import OrderOnline from "../pages/Order";
// import Reservation from "../pages/Reservation";
// import Contact from "../pages/Contact";
// import Catering from "../pages/Catering";
=======

// import Order from "../pages/Order";
// import Reservation from "../pages/Reservation";
// import Contact from "../pages/Contact";
// import Catering from "../pages/Catering";

/***
  { <Route path="/" exact component={OrderOnline} />
                    <Route path="/" exact component={Reservation} />
                    <Route path="/" exact component={Contact} />
                    <Route path="/" exact component={Catering} /> 
                }
 */
>>>>>>> 964ffce14dbb7e2b9c31226ffc5e1fb721f95ef2

import UserDashboard from "../pages/UserDashboard";
import PageOne from "../pages/PageOne";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import NoMatch from "../pages/NoMatch";

export const App = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUser());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Router history={history}>
                <NavBar />
                <Switch>
<<<<<<< HEAD
                    <Route path="/" exact component={Login} />
                  
                    {/* <Route path="/" exact component={OrderOnline} />
                    <Route path="/" exact component={Reservation} />
                    <Route path="/" exact component={Contact} />
                    <Route path="/" exact component={Catering} /> */}
=======
                    <Route path="/" exact component={Home} />
>>>>>>> 964ffce14dbb7e2b9c31226ffc5e1fb721f95ef2

 
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
<<<<<<< HEAD
                    <Route path="/menu" exact component={Menu} />
                    <PrivateRoute path="/dashboard" component={UserDashboard} />
                    <PrivateRoute path="/pageone" component={PageOne} />
=======

                    <Route path="/menu" exact component={Menu} />

>>>>>>> 964ffce14dbb7e2b9c31226ffc5e1fb721f95ef2
                    <Route component={NoMatch} />
                </Switch>
            </Router>
        </>
    )
}

export default App;
