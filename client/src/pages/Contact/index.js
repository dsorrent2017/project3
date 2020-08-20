import React from "react";
// import Footer from "./src/components/Footer";
import Footer from "../../components/Footer";
// import Info from "./pages/Info";
// import Form from "../../pages/Form";
import './contact.css'

function Contact() {

    return (
      <>
      <div className="contact">
      <h1>Contact</h1>
      <footer className="page-footer" />
        <div className="container">
            <a className="navbar-brand animated pulse d-block text-center m-0 p-0" href="#" />
             

            <div className="row" />
            <div className="col-md-3" />
            <h5 className="page-footer-title">OPENING HOURS</h5>
            <p className="mb-0">Open daily from 8am</p>
            <p className="mb-0">Bar: Daily from 8am - 12pm</p>
            <p className="mb-0">Breakfast: Daily from 8am - 11am</p>
            <p className="mb-0">Lunch: Daily from 12pm - 3pm</p>
            <p>Dinner: Daily from 6pm - 12pm</p>
        </div>
        {/* <div className="col-md-3 h-100 border-left-custom" />
        <h5 className="page-footer-title mt-3 mt-md-0">LOCATION</h5>
        <address>
            Bella Italia &amp; Italian Restaurant<br/>
                1600 Broad Street<br/>
              Philadelphia,PA 19148<br/>
                <abbr title="Phone">P:</abbr> (215) 366-8820<br/>
            <abbr title="Email">E:</abbr> info@bellaitalia.com
            </address> */}
      
          <div className="row" />
        <div className="col-md-12 h-100 border-left-custom">
            <h5 className="page-footer-title mt-12 mt-md-0" >FOLLOW US</h5>
            
            <div className="mb-3">
                <a className="footer-social" href="https://github.com/cantando" aria-label="facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a className="footer-social" href="https://github.com/cantando" aria-label="tripadvisor"><i class="fa fa-tripadvisor" aria-hidden="true"></i></a>
                <a className="footer-social" href="https://github.com/cantando" aria-label="instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a>
            </div>
        </div>
       

        <div className="col-md-3 h-100 border-left-custom" >
            <h5 className="page-footer-title mt-3 mt-md-0">NEWSLETTER</h5>
        </div>
        <p>
            Complete the form to receive information on the latest events,
            news and special offers at Bella Italia.
            </p>
        <form id="newsletter-form">
        
            <label class="sr-only" for="formEmail">Email</label>
            <input type="email" className="form-control form-control-sm rounded" id="formEmail" placeholder="name@example.com" />
            {/* <button type="submit" className="btn btn-sm btn-outline-light btn-block mt-2">Subscribe</button> */}
           {/* <input type="submit"/> */}
            <button type="submit" className="btn btn-danger">SUBMIT</button>
     
            </form>

        <Footer />
                </div>  
            </>
);
      }



                   
                  
    

export default Contact;