import axios from "axios";

export default {
    // API request to server side 
    
    register(data) {   
        return axios.post("/auth/register", data)
    },
    login(data) {
        return axios.post("/auth/login", data)
    },
    loadUser(headers) {
        return axios.get("/auth/user", headers)
    },

    //Dan
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