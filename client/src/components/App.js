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
import Orderonline from "../pages/Orderonline";
// import Checkout from "../pages/Checkout";
// import React, { useState } from "react";

//import Menus from "../pages/Menus";  //Dan -- we need an admin folder for Menus, Reservations and other admin pages, Just following GoogleBooks HW Layout for now

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
                <Route path="/orderonline" exact component={Orderonline} />
                {/* <Route path="/checkout" exact component={checkout} /> */}
                <PrivateRoute path="/dashboard" component={UserDashboard} />
                <PrivateRoute path="/pageone" component={PageOne} />
                <Route component={NoMatch} />
            </Switch>
        </Router>
    )
}
// function App() {
//     const [loading, setLoading] = useState(false)
//     const [image, setImage] = useState("")
//     cost[uploadImage] = async e => {
//         cost[files] = e.target.files
//         const data = new FormData()
//         data.append("file", files[0])
//         data.append("upload_preset", "Italian Food Images")
//         setLoading(true)
//         const res = await fetch("https://api.cloudinary.com/v1_1/cantando/image/upload", { method: "post", body: data })
//         const file = await res.json()

//         console.log(file);
//         setImage(file.secure_url)
//         setLoading(false)

//         return (

//             <div className="App">
//                 <input type="file" name ="file" placeholder="Upload Image"
//                 onChange={uploadImage}/>

//                 {
//                 loading?(
//                     <h3>Loading...</h3>
//                 ):(
//                         <img src={image} style={{width:"300px"}}/>
//                     )
//                 }

//             </div>



//         )
//     }

// }

export default App;

