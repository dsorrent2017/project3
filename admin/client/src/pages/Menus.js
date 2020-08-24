
import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";



function Menus() {
  // Setting our component's initial state
  const [menus, setMenus] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all menus and store them with setMenus
    useEffect(() => {
        debugger;
    loadMenus()
  }, [])

  // Loads all menus and sets them to menus
    function loadMenus() {
        debugger;
    API.getMenus()
      .then(res => 
        setMenus(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a menu from the database with a given id, then reloads menus from the db
    function deleteMenu(id) {

    API.deleteMenu(id)
      .then(res => loadMenus())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
  
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveMenu method to save the menu data
  // Then reload menus from the database
    function handleFormSubmit(event) {
        debugger;
    event.preventDefault();
        debugger;
        console.log("!!!!!!!!!!! category " + formObject.category + " itemName " + formObject.itemName)
        if (formObject.category && formObject.itemName) {
            API.saveMenu({
                category: formObject.category,
                itemName: formObject.itemName,
                ingredientsUrl: formObject.ingredientsUrl
            })
                .then(res => loadMenus())
                .catch(err => console.log(err));
        } else {
            alert('Please fill in values for category and item name')
        }
    };

    /*****
    category: { type: String, required: true },
    itemName: { type: String, required: true },
    ingredientsUrl: { type: String }
    *****/

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Display Items In Menu</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="category"
                placeholder="E.G. Salad, Sandwhich, etc (required)"
              />
              <Input
                onChange={handleInputChange}
                name="itemName"
                placeholder="E.G. Chicken Soup (required)"
               />
            <Input
                onChange={handleInputChange}
                name="ingredientsUrl"
                placeholder="E.G. ../models/chickensoupingredients.js (optional)"
            />

              <FormBtn
                onClick={handleFormSubmit}
              >
                Submit Menu
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Menu Items from MongoDB</h1>
            </Jumbotron>
            {menus.length ? (
              <List>
                {menus.map(menu => (
                  <ListItem key={menu._id}>
                    <Link to={"/menus/" + menu._id}>
                      <strong>
                        {menu.category} : {menu.itemName}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteMenu(menu._id)} />
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


export default Menus;
