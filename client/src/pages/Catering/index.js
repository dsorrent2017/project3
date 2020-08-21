import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Container,Row,Col,
  } from 'reactstrap';
import{Link}from "react-router-dom";


  function Catering (){
return(
<Container>
<Row>
    <Col md={6}>

   
    <Card>
<CardBody>
<CardImg src="https://i.insider.com/538798d3eab8eae80cb36475">

</CardImg>
<CardTitle>
    Pasta Package
</CardTitle>
<CardText>
    Salad, Pasta, Dessert For 25 people
</CardText>
<Link to="/Checkout"><Button>
    Add To Cart
</Button></Link>


</CardBody>
    </Card>
    </Col>

    <Col md={6}>

   
<Card>
<CardBody>
<CardImg src="https://i.insider.com/538798d3eab8eae80cb36475">

</CardImg>
<CardTitle>
Pasta Package
</CardTitle>
<CardText>
Salad, Pasta, Dessert For 25 people
</CardText>
<Button>
Add To Cart
</Button>


</CardBody>
</Card>
</Col>

</Row>

<Row>
<Col md={6}>

   
<Card>
<CardBody>
<CardImg src="https://i.insider.com/538798d3eab8eae80cb36475">

</CardImg>
<CardTitle>
Pasta Package
</CardTitle>
<CardText>
Salad, Pasta, Dessert For 25 people
</CardText>
<Button>
Add To Cart
</Button>


</CardBody>
</Card>
</Col>
<Col md={6}>

   
<Card>
<CardBody>
<CardImg src="https://i.insider.com/538798d3eab8eae80cb36475">

</CardImg>
<CardTitle>
Pasta Package
</CardTitle>
<CardText>
Salad, Pasta, Dessert For 25 people
</CardText>
<Button>
Add To Cart
</Button>


</CardBody>
</Card>
</Col>









</Row>

</Container>





)


  }
  export default Catering;