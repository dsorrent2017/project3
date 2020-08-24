
import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './reservation.css'


import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";

import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Reservation() {  //this is like a class in Java or C#, just using the word function istead of class
    const [reservations, setReservations] = useState([])
    const [formObject, setFormObject] = useState({})

    debugger;

    useEffect(() => {
        loadReservations()
    }, []);

    // Loads all menus and sets them to menus
    function loadReservations() {
        debugger;
        API.getReservations()
            .then(res =>
                setReservations(res.data)
            )
            .catch(err => console.log(err));
    };

    // Deletes a reservation from the database with a given id, then reloads reservations from the db
    function deleteReservations(id) {
        API.deleteReservations(id)
            .then(res => loadReservations())
            .catch(err => console.log(err));
    }

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {

        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };


    // Deletes a reservation from the database with a given id, then reloads reservations from the db
    function deleteReservations(id) {

        API.deleteReservation(id)
            .then(res => loadReservations())
            .catch(err => console.log(err));
    }


    // When the form is submitted, use the API.saveReservations method to save the reservation data
    // Then reload reservations from the database
    function handleFormSubmit(event) {
        debugger;
        event.preventDefault();

        /*
         const ReservationSchema = new Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true,
    },

    email: {
        type: String,
        require: true
    },
    //Probably want a time range for delivery and for holding a reservation at a sit-down visit,
    //see time range by moment- range library https://www.npmjs.com/package/moment-range
    date: {     //Date and time of reservation
        type: Date,
        require: true
    },
    delivery: {
        type: Delivery,
        require: false
    }

});
         */
        debugger;
        if (formObject.firstname != null && formObject.lastname != null
            && formObject.email != null && formObject.date != null) { 
            API.makeReservation({
                firstname: formObject.firstname,
                lastname: formObject.lastname,
                email: formObject.email,
                date: formObject.date
            })
                .then(res => loadReservations())
                .catch(err => console.log(err));
        } else {
            alert('Please fill in values for category and item name')
        }
    };
    /**
     * ***
     * @param {any} formVal
     
    const onFormSubmit = (formVal) => {
        debugger;
        console.log("onFormSubmit");
        dispatch(handleReservationRequest(formVal));
    };
    */
    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <Jumbotron>
                        <h1>Reservations</h1>
                    </Jumbotron>
                    <form>
                        <Input
                            onChange={handleInputChange}
                            name="firstname"
                            placeholder="John"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="lastname"
                            placeholder="Doe"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="email"
                            placeholder="abc@def.com)"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="date"
                            placeholder="08/23/2020 7:00 PM EST"
                        />

                        <FormBtn
                            onClick={handleFormSubmit}
                        >
                            Submit Reservation
              </FormBtn>
                    </form>
                </Col>
                <Col size="md-6 sm-12">
                    <Jumbotron>
                        <h1>Current Reservations</h1>
                    </Jumbotron>
                    {reservations.length ? (
                        <List>
                            {reservations.map( reservation => (
                                <ListItem key={reservation._id}>
                                    <Link to={"/reservations/" + reservation._id}>
                                        <strong>
                                            {reservation.firstname}  {reservation.lastname} {reservation.date} {reservation.email}
                                        </strong>
                                    </Link>
                                    <DeleteBtn onClick={() => deleteReservations(reservation._id)} />
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Col>
            </Row>
        </Container>
    );
    


}



export default Reservation;