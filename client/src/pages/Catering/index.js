import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col,
} from 'reactstrap';
// import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import { Link } from "react-router-dom";


function Catering() {
    return (
        <Container>
            <p>ALL PACKAGES CAN BE CUSTOMIZED</p>
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
                            <CardImg src="https://tse2.mm.bing.net/th?id=OIP.hKkk-G6quTHf1VcLPKfL9gHaFj&pid=Api&P=0&w=212&h=160">
                            </CardImg>
                            <CardTitle>
                                Meat Package
</CardTitle>
                            <CardText>
                                Salad, Assortment of Chicken, Pork, Lamb, Sausage , And Dessert For 25 people
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
                            <CardImg src="http://thehalalfoodblog.com/wp-content/uploads/2018/04/Mr-Wholly-Part-II-24-Tom-Yum-1170x780.jpg">

                            </CardImg>
                            <CardTitle>
                                Seafood Package
</CardTitle>
                            <CardText>
                                Salad, Seafood Melody, Shrimp, Scallops , Langostino, Calamari, And Dessert For 25 people
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
                            <CardImg src="https://parade.com/wp-content/uploads/2015/05/potato-skins.jpg">

                            </CardImg>
                            <CardTitle>
                                Pasta Package
</CardTitle>
                            <CardText>
                                Salad, Apetizer Assorments, Dessert For 25 people
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