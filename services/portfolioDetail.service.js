const db = require('../models');
const portfoliodetail_model = db.Portfoliodetail;


exports.findOneById = async (id) => {
    return portfoliodetail_model.findOne({
        where:{id:id}
    })
}

exports.buy = async(portfolioObj) => {
    return await portfoliodetail_model.create(portfolioObj);
}

exports.sell = async(portfolioObj) => {
    return await portfoliodetail_model.create(portfolioObj);
}


