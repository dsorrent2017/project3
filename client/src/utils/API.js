import axios from "axios";

export default {
    // API request to server side -- Need to build one for reservation
    
    register(data) {
        debugger;
        return axios.post("/auth/register", data)
    },
    login(data) {
        debugger;
        return axios.post("/auth/login", data)
    },
    loadUser(headers) {
        debugger;
        return axios.get("/auth/user", headers)
    },

    //Dan
    //Reservation section

    // Menu section
    getReservations: function () {
        return axios.get("/api/reservations");
    },
    // Gets the menu with the given id
    getReservation: function (id) {
        return axios.get("/api/reservations/" + id);
    },
    // Deletes the menu with the given id
    deleteReservation: function (id) {
        return axios.delete("/api/reservations/" + id);
    },
    // Saves a reservation to DB
    makeReservation: function (reservationData) {   //PATTERN AFTER Registration
        return axios.post("/api/reservations", reservationData);
    },


    // Menu section
    getMenus: function () {
        return axios.get("/api/menus");
    },
    // Gets the menu with the given id
    getMenu: function (id) {
        return axios.get("/api/menus/" + id);
    },
    // Deletes the menu with the given id
    deleteMenu: function (id) {
        return axios.delete("/api/menus/" + id);
    },
    // Saves a menu to the database
    saveMenu: function (menuData) {
        return axios.post("/api/menus", menuData);
    }
}