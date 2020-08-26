const db = require("../models");

// Defining methods for the MenusController  //Dan
module.exports = {

    findAll: function (req, res) {
        console.log("############################# menusController.findAll " + JSON.stringify(req.query));

        db.Menu
            .find(req.query)
            .then(dbModel => {
                console.log("############################# res data " + dbModel);

                res.json(dbModel);
            })
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Menu
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Menu
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Menu
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Menu
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
