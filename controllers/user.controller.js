const db = require('../models')
const Users = db.users
const Op = db.Sequielize.Op

// Create Users
exports.create = (req,res,next) => {

    const {id, name, address, email, password} = req.body

    Users.create({
        id,
        name,
        address,
        email,
        password

    })
    .then((result) =>{
        res.send(result)
    })
    .catch((err) =>{
        res.send(err)
    })
}

//read all users
exports.read = (req,res,next) => {

    const { name } = req.query.name
    var condition = name ? {name: {[Op.iLike]:  `%${name}%`} }: null

    Users.findAll({
       where: condition
    })
    .then((result) =>{
        res.send(result)
    })
    .catch((err) =>{
        res.send(err)
    })
}

// update user
exports.userUpdate = (req,res,next) =>{

    const { id } = req.params.id

    Users.update(req.body,{
       where: {id: id}
    })
    .then((result) =>{
        res.send(result)
    })
    .catch((err) =>{
        res.send(err)
    })

}

//delete user

exports.deleteUser = (req,res,next) =>{

    const { id } = req.params.id

    Users.destroy({
       where: {id: id}
    })
    .then((result) =>{
        res.send(result)
    })
    .catch((err) =>{
        res.send(err)
    })

}



