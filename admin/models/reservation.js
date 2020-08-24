const mongoose = require("mongoose");
const Schema = mongoose.Schema;
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const Moment = require('moment');
const MomentRange = require('moment-range');

const moment = MomentRange.extendMoment(Moment);

       
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

    date: {     //Date and time of reservation      
        type: Date,
        require: true
    },
    time: {
        type: Date,
        require: true
    },

    partyof: {
        type: Number,
        require: true
    },

    phone: {
        type: Phone,
        require: true
    },

    message: {
        type: String,
        require: false
    }

});







module.exports = Reservation = mongoose.model("reservation", ReservationSchema);