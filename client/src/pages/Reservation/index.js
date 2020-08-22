import React from "react";
import Footer from "../Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './reservation.css'




function Reservation() {

    return (
        <>
      
        <div className="Reservation"/>
        <div className="container-fluid reservations-form dark-overlay" >
        <h1>Reservations</h1>
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
            <button type="submit" className="btn btn-danger">SUBMIT</button>
        </div>
     
        


      
         
        

        <footer className="page-footer" />
        <div className="container">
            <a className="navbar-brand animated pulse d-block text-center m-0 p-0" href="#" />
            
            <div className="row" />
            <div className="col-md-3 " />
            <h5 className="page-footer-title">OPENING HOURS</h5>
            <p className="mb-0">Open daily from 11am-10pm</p>
            <p className="mb-0">Lunch: Daily from 12pm - 3pm</p>
            <p className="mb-0">Dinner: Daily from 4pm - 11pm</p>
        </div>
         <div id="googleMapContainer" class="homepage-google-map">
    <iframe title="Our location on Google My Maps" class="google-map" src="https://google.com/maps/embed/v1/place?key=AIzaSyD0cpsvSdvUgtIg9yRInmJ0z8RgFNXxWyk&amp;q=Philadelphia+Pennsylvania+"></iframe>
  </div> 
       

        
       

        <Footer/>
  
</>
      );

}


export default Reservation;