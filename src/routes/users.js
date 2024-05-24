const express = require("express");
const usersController = require("../controller/users");

const router = express.Router();

// create
router.post("/", usersController.createUser);

// read
router.get("/", usersController.getAllUsers);

// update
router.patch("/:idUser", usersController.updateUser);

// delete
router.delete("/:idUser", usersController.deleteUser);

module.exports = router;
