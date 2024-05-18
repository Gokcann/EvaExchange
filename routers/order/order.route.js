const express = require('express');
const router = express.Router();

const Order = require('../../controllers/order.controller');
router
    .post("/buy", Order.buy)
    .post("/sell", Order.sell)

module.exports = router;