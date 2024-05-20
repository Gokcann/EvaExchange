const db = require('../models');
const user_model = db.User;

exports.getUsers = (() => {
    try {
        return user_model.findAll();
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
    try {
        return user_model.findOne({
            where:{id:id}
        })
    }catch(err) {
        return data = {
            msg:'error',
            status: 500,
            data:null,
            txt: err.message
    } }
    
}

exports.create = async(userObj) => {
    try {
        return await user_model.create(userObj);
    } catch(err) {
        return data = {
            msg:'error',
            status: 500,
            data:null,
            txt: err.message
    }
    }
    
}

exports.update = async(userObj, id) => {
    await user_model.update(userObj, {
        where:{id:id}
    }).then(data => {
        return data;
    }).catch (err => {
        return err
    })
}

exports.deleted = async(id) => {
    //return user_model.destroy()
    await user_model.destroy({
        where:{id:id}
    }).then((data) => {
        return data;
    }).catch( err => {
        return err
    })
}

