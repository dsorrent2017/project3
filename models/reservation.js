const mongoose = require("mongoose");
const Schema = mongoose.Schema;
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const Moment = require('moment');
const MomentRange = require('moment-range');

const moment = MomentRange.extendMoment(Moment);

/*
 See: https://www.npmjs.com/package/moment-range#node--npm

 Browser

<script src="moment.js"></script>
<script src="moment-range.js"></script>

window['moment-range'].extendMoment(moment);

 */

const DeliveryOrCaterer = new Schema({
    poviderCompanyName: {
        type: String,
        require: true
    },
    providerContactPhone: {  //Use Node Phone and formatter after Tuesday 8/25
        type: String,
        require: true
    },
    providerContactName: {
        type: String,
        require: true

    },
    providerHomePage: {
        type: String,
        require: true
    }
});
       
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
    //TODO : change to a true date type
    date: {     //Date and time of reservation      
        type: String,
        require: true
    },
    delivery: {
        type: Delivery,
        require: false
    }

});

module.exports = Reservation = mongoose.model("reservation", ReservationSchema);