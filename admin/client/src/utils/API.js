import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
    },

    // Gets all reservations
    getReservations: function () {
        debugger;
        return axios.get("/api/reservations");
    },
    // Gets the book with the given id
    getReservation: function (id) {
        return axios.get("/api/reservations" + id);
    },
    // Deletes the book with the given id
    deleteReservation: function (id) {
        return axios.delete("/api/reservations/" + id);
    },

    makeReservation: function (reservationData) {
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
        console.log("!!!!!!!!!!!!!!!!!!!!!! savemenu menuData = " )
        return axios.post("/api/menus", menuData);
    }
};
