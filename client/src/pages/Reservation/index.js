import React from "react";
import Footer from "../../components/Footer";




function Reservation() {

    return (
        <>
        <h1>Reservations</h1>
        <div className="container-fluid reservations-form dark-overlay" >


            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="inputName">NAME:</label>
                    <input type="text" className="form-control" id="inputName" placeholder="John Smith" />
                </div>
                <div className="form-group col-md-6">
                    <label for="inputEmail">EMAIL:</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="name@example.com" />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-5">
                    <label for="inputDate">DATE:</label>
                    <input type="date" className="form-control" id="inputDate" />
                </div>
                <div className="form-group col-md-2">
                    <label for="inputNumber">PARTY OF:</label>
                    <input type="number" min="1" className="form-control" id="inputNumber" placeholder="1">
                    </input>
                </div>
                <div className="form-group col-md-5">
                    <label for="inputPhone">PHONE:</label>
                    <input type="tel" className="form-control" id="inputPhone" placeholder="99123456" />
                </div>
            </div>
            <div className="form-group" >
                <label for="inputTextarea">MESSAGE:</label>
                <textarea className="form-control" id="inputTextarea" rows="7" placeholder="Additional details">
                </textarea>
            </div>
            <button type="submit" className="btn btn-light">SUBMIT</button>
        </div>


        {/* /* /* <!-- GOOGLE MAP -->
        <!-- <div id="googleMapContainer" class="homepage-google-map">
          <iframe title="Our location on Google My Maps" class="google-map" src="https://www.google.com/maps/d/embed?mid=1YihUagJV98aTSoPRpalSyqRjTVhaFv5E&hl=en"></iframe>
        </div>       -->
        */}

        <footer className="page-footer" />
        <div className="container">
            <a className="navbar-brand animated pulse d-block text-center m-0 p-0" href="#" />
            {/* <img src="../images/italianmarket" width="50" height="50" alt="Logo">
        </a> */}
            <div className="row" />
            <div className="col-md-3" />
            <h5 className="page-footer-title">OPENING HOURS</h5>
            <p className="mb-0">Open daily from 8am</p>
            <p className="mb-0">Bar: Daily from 8am - 12pm</p>
            <p className="mb-0">Breakfast: Daily from 8am - 11am</p>
            <p className="mb-0">Lunch: Daily from 12pm - 3pm</p>
            <p>Dinner: Daily from 6pm - 12pm</p>
        </div>
        <div className="col-md-3 h-100 border-left-custom" />
        <h5 className="page-footer-title mt-3 mt-md-0">LOCATION</h5>
        <address>
            Bella Italia &amp; Italian Restaurant<br/>
                1600 Broad Street<br/>
              Philadelphia,PA 19148<br/>
                <abbr title="Phone">P:</abbr> (215) 366-8820<br/>
            <abbr title="Email">E:</abbr> info@bellaitalia.com
            </address>

        <div className="col-md-3 h-100 border-left-custom">
            <h5 className="page-footer-title mt-3 mt-md-0">FOLLOW US</h5>
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
            <button type="submit" className="btn btn-sm btn-outline-light btn-block mt-2">Subscribe</button>
        </form>



        <Footer/>
   
</>
      );

}


export default Reservation;