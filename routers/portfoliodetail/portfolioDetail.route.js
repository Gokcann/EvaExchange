const express = require('express');
const router = express.Router();

const PortfolioDetailController = require('../../controllers/portfolioDetail.controller');
router
    .get("/findOne", PortfolioDetailController.findOnePortfolioDetail)
    //.post("/buy", PortfolioDetailController.buyPortfolio)
    //.post("/sell", PortfolioDetailController.sellPortfolio)

module.exports = router;