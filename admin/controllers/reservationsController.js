const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config");
const db = require("../models");

module.exports = {

    findAll: function(req, res) {
        console.log("############################# reservationsController.findAll " + JSON.stringify(req.query));

       db.Reservation
            .find(req.query)
            .then(dbModel => {
                console.log("############################# res data " + dbModel);

                res.json(dbModel);
            })
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
       db.Reservation
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
       db.Reservation
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
       db.Reservation
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
       db.Reservation
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};

/****


module.exports = {
    async reservation(req, res) {

        try {
            console.log('reservation controller')

            const { email, firstname, lastname, date, time, partyof, phone, message } = req.body;
            // Check user enters all fields   for now last name is not required
            if (!email  || !firstname || !date || !time || !partyof || !phone) return res.status(400).json({ message: "Please enter all fields" });

            // Check the user enters the right formatted email
            const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

            if (reg.test(email) === false) return res.status(400).json({ message: "Incorrect email format" });

            //TODO: check phone format

            // Check if user already exist
            const reservation = await Reservation.findOne({ email })
            if (reservation) {
                return res.status(400).json({ message: "Code needs to be improved to change or delete existing reservations.  Just making new ones for now" });
            }

            // create new Reservation object to be saved in Database
            // if (!email || !password || !firstname || !date) return res.status(400).json({ message: "Please enter all fields" });

            const newReservation = new Reservation({
                firstname,
                lastname,
                email,
                date,
                time,
                partyof,
                phone
            });

                return res.status(400).json({ message: "Please enter all fields" });

        } catch (err) {
            throw err;
        }
    }


 
};
*/