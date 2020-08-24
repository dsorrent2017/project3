const router = require("express").Router();
//const bookRoutes = require("./books");
const menuRoutes = require("./menus");
// Book routes
//router.use("/books", bookRoutes);
router.use("/menus", menuRoutes);

module.exports = router;
