const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    category: { type: String, required: true },
    itemName: { type: String, required: true },
    ingredientsUrl: { type: String }
});

const Menu = mongoose.model("Menu", menuSchema);

if (Menu !== null) {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Menu  IS DEFINED")
} else {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Menu  IS NOT!!!! DEFINED")
}

module.exports = Menu;