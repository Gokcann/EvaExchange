const userService = require('../services/user.service')

const userList = async(req,resp) => {
    await userService.getUsers()
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

const findOneUser = async(req,resp) => {
    //const user_id = req.params.id;
    await userService.findOneById(req.params.id)
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

const createUser = async (req,resp) => {
    const userOBj = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
    }
    await userService.create(userOBj)
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
            data: err,
            msg: "Error",
            status:500,
            err:err
    })
    })
}

const updateUser = async(req,resp) => {
    const userOBj = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
    }
    await userService.update(userOBj, req.body.id)
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

const deleteUser = async(req,resp) => {
    await userService.deleted(req.body.id)
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
    userList,
    findOneUser,
    createUser,
    updateUser,
    deleteUser
}