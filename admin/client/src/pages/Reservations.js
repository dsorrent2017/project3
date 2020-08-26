
import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";



function Reservations() {
    // Setting our component's initial state
    const [reservations, setReservations] = useState([])
    const [formObject, setFormObject] = useState({})

    debugger;

    // Load all reservations and store them with setReservations
    useEffect(() => {
        loadReservations()
    }, [])

    // Loads all reservations and sets them to reservations
    function loadReservations() {
        debugger;
        API.getReservations()
            .then(res =>
                setReservations(res.data)
            )
            .catch(err => console.log(err));
    };

    // Deletes a reservation from the database with a given id, then reloads reservations from the db
    function deleteReservation(id) {

        API.deleteReservation(id)
            .then(res => loadReservations())
            .catch(err => console.log(err));
    }

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {

        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    // When the form is submitted, use the API.saveReservation method to save the reservation data
    // Then reload reservations from the database
    function handleFormSubmit(event) {
        debugger;
        event.preventDefault();
        debugger;
        console.log("!!!!!!!!!!! category " + formObject.category + " itemName " + formObject.itemName)
        if (formObject.category && formObject.itemName) {
            API.saveReservation({
                category: formObject.category,
                itemName: formObject.itemName,
                ingredientsUrl: formObject.ingredientsUrl
            })
                .then(res => loadReservations())
                .catch(err => console.log(err));
        } else {
            alert('Please fill in values for category and item name')
        }
    };

    /*****
    category: { type: String, required: true },
    itemName: { type: String, required: true },
    ingredientsUrl: { type: String }


MYRNA REPLACE THE RETURN CODE WITH YOUR CODE 
BUT, YOU WILL NEED TO MODEL THE RETURN AFTER THE Menus.js with the html that you have done in your Reservations Page

    *****/

    return (
        <Container fluid>
            <Row>

  
                <Col size="md-12">
                    <Jumbotron>
                        <h1>Reservation Items from MongoDB</h1>
                    </Jumbotron>
                    {reservations.length ? (
                        <List>
                            {reservations.map(reservation => (
                                <ListItem key={reservation._id}>
                                    <Link to={"/reservations/" + reservation._id}>
                                        <strong>
                                            {reservation.firstname} : {reservations.lastname}
                                        </strong>
                                    </Link>
                                    <DeleteBtn onClick={() => deleteReservation(reservation._id)} />
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


export default Reservations;
