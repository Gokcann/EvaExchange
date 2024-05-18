const express = require('express');
const router = express.Router();

const PortfolioController = require('../../controllers/portfolio.controller');
router
    .get("/lists", PortfolioController.portfolioList)
    .get("/findOne", PortfolioController.findOnePortfolio)
    .post("/create", PortfolioController.createPortfolio)

module.exports = router;