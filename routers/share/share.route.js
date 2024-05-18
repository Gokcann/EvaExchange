const express = require('express');
const router = express.Router();

const ShareController = require('../../controllers/share.controller');
router
    .get("/findOne", ShareController.findOneShare)

module.exports = router;