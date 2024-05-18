const portfolioService = require('../services/portfolio.service')

const portfolioList = async(req,resp) => {
    await portfolioService.getPortfolio()
        .then(data => {
            resp.send({
                data: data,
                msg: "Success",
                status:200,
                err:''
            })
        })
        .catch( err => {
            resp.send({
                data: null,
                msg: "Error",
                status:500,
                err:err
        })
    })
}

const findOnePortfolio = async(req,resp) => {
    //const user_id = req.params.id;
    await portfolioService.findOneById(req.params.id)
    .then((data) => {
        resp.send({
            data: data,
            msg: "Success",
            status:200,
            err:''
        })
    }).catch( (err) => {
        resp.send({
            data: null,
            msg: "Error",
            status:500,
            err:err
    })
    })
}

const createPortfolio = async (req,resp) => {
    const portfolioOBj = {
        id: req.body.id,
        userId: req.body.userId
    }
    await portfolioService.create(portfolioOBj)
    .then((data) => {
        resp.send({
            data: data,
            msg: "Success",
            status:200,
            err:''
        })
    }).catch( (err) => {
        console.error(err);
        resp.send({
            data: null,
            msg: "Error",
            status:500,
            err:err
    })
    })
}


module.exports = {
    portfolioList,
    findOnePortfolio,
    createPortfolio
}