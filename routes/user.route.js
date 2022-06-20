
    const controller = require("../controllers/user.controller")
    var router = require("express").Router()
    
    router.post('/create', controller.create)
    router.get('/readAll', controller.read)
    router.put('/update', controller.userUpdate)
    router.delete('/delete', controller.deleteUser)
    
module.exports = router
