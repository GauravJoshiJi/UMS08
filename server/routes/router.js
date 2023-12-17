const express = require("express");
const route = express.Router();
const service = require("../services/render");
const controller = require("../controller/controller");

// @description for home page
//Method GET
route.get("/", service.home_route);
// @description for adding new user page
//Method GET
route.get("/add-user", service.add_user);
// @description for updating user page
//Method GET
route.get("/update-user", service.update_user);

//RESTFULL API's => CRUD operations
//CREATE
route.post("/api/users", controller.creating_user);
//READ
route.get("/api/users", controller.finding_user);
//UPDATE
route.put("/api/users/:id", controller.updating_user);
//DELETE
route.delete("/api/users/:id", controller.deleting_user);

module.exports = route;
