const share = require('../models/share')
const portfolioDetailService = require('../services/portfolioDetail.service')



const findOnePortfolioDetail = async(req,resp) => {
    //const user_id = req.params.id;
    await portfolioDetailService.findOneById(req.params.id)
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


module.exports = {
    findOnePortfolioDetail
}