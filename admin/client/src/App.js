import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
//import Menus from "./pages/Menus";
import Reservations from "./pages/Reservations";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";



/**
function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path={["/", "/menus"]}>
                        <Menus />
                    </Route>
                    <Route exact path="/menus/:id">
                        <Detail />
                    </Route>
                    <Route>
                        <NoMatch />
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}
 ***/

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path={["/", "/reservations"]}>
                        <Reservations />
                    </Route>
                    <Route exact path="/reservations/:id">
                        <Detail />
                    </Route>
                    <Route>
                        <NoMatch />
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}
export default App;
