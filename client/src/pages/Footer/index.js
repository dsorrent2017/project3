import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col,
} from 'reactstrap';

import"./footer.css"
function Footer() {

    return (
        <>
        <div className="page-footer-copyright container-fluid text-center">
        <h5 className="page-footer-title mt-3 mt-md-0">LOCATION</h5>
        <address>
            Bella Italia <br/>
                1600 Broad Street<br/>
              Philadelphia,PA 19148<br/>
                <abbr title="Phone">P:</abbr> (215) 366-8820<br/>
            <abbr title="Email">E:</abbr> info@bellaitalia.com
            </address>
            © 2020 Bella Italia &amp; Restaurant.
        </div>
        <div className="row" />
                <div className="col-md={6} h-100 border-left-custom">
                    <h5 className="page-footer-title mt-12 mt-md-0" >FOLLOW US</h5>
                    <div class="ml-auto ">
                   
                        <a class="nav-social mr-2" href="https://github.com/cantando"><i class="fab fa-facebook" aria-hidden="true"></i></a>
                        <a class="nav-social mr-2" href="https://github.com/cantando"><i class="fab fa-tripadvisor" aria-hidden="true"></i></a>
                        <a class="nav-social mr-2" href="https://github.com/cantando"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                        <a class="nav-social" href="https://github.com/cantando"><i class="fab fa-envelope" aria-hidden="true"></i></a>
                     
                    
                    </div>
                 
                </div>
              
        </>
    )

}
export default Footer;