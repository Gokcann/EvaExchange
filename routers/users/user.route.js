const express = require('express');
const router = express.Router();

const UserController = require('../../controllers/user.controller');
router
    .get("/lists", UserController.userList)
    .get("/findOne", UserController.findOneUser)
    .post("/create", UserController.createUser)
    .post("/update", UserController.updateUser)
    .post("/delete", UserController.deleteUser)

module.exports = router;