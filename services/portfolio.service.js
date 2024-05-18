const db = require('../models');
const portfolio_model = db.Portfolio;

exports.getList = (() => {
    try {
        return portfolio_model.findAll();
    }
    catch(err){
        return data = {
            msg:'error',
            status: 500,
            data:null,
            txt: err.message
        }
    }
    
});

exports.findOneById = async (id) => {
    return portfolio_model.findOne({
        where:{id:id}
    })
}

exports.create = async(portfolioObj) => {
    return await portfolio_model.create(portfolioObj);
}



