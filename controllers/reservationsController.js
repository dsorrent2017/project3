const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config");
const User = require("../models/reservation");

/****
  const Reservation = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    //Probably want a time range for delivery and for holding a reservation at a sit-down visit,
    //see time range by moment- range library https://www.npmjs.com/package/moment-range
    date: {     //Date and time of reservation
        type: Date,
        require: true
    },
    delivery: {
        type: Delivery,
        require: false

});

 */

module.exports = {
    async reservation(req, res) {

        try {
            console.log('reservation controller')

            const { email, firstname, lastname, date } = req.body;
            // Check user enters all fields   for now last name is not required
            if (!email || !password || !firstname || !date) return res.status(400).json({ message: "Please enter all fields" });

            // Check the user enters the right formatted email
            const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

            if (reg.test(email) === false) return res.status(400).json({ message: "Incorrect email format" });


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
                date
            })


        } catch (err) {
            throw err;
        }
    }


    /**
     * *************************************
     * @param {any} req
     * @param {any} res
     
    async login(req, res) {

        try {

            const { email, password } = req.body;

            // Check user enters all fields
            if (!email || !password) return res.status(400).json({ message: "Please enter enter email and password" });
            // Check for correct email
            const user = await User.findOne({ email });

            // if email not found
            if (!user) return res.status(400).json({ message: "Email not found. Please reservation" })
            // if email found compare hashed password with incoming password
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) throw err;
                const match = result;
                if (!match) return res.status(401).json({ message: "Incorrect Password" })
                // create json web token and send it back to client side
                jwt.sign({ userId: user.id }, config.jwtSecret, { expiresIn: 60 * 60 }, (err, token) => {
                    if (err) throw err;
                    res.json({
                        token,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        email
                    })
                })
            })

        } catch (err) {
            console.log(err);
        }
    },
    // get user information
    async getUser(req, res) {
        try {
            // find user by id
            const user = await User.findById(req.userId)
                // return all info but password
                .select("-password");
            // send info to client
            res.json(user)
        } catch (err) {
            throw err;

        }
    }
    ***********************/
};
