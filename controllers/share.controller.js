const shareService = require('../services/share.service')

const findOneShare = async(req,resp) => {
    //const user_id = req.params.id;
    await shareService.findOneById(req.params.id)
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
    findOneShare
}