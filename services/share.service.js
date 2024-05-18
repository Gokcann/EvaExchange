const db = require('../models');
const share_model = db.Share;


exports.findOneById = async (id) => {
    return share_model.findOne({
        where:{id:id}
    })
}


