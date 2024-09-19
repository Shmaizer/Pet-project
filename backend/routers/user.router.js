const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controller')

router.post('/register',userController.createUser)
router.post('/user',userController.getUsers)
router.post('/user/:id',userController.getOneUser)
router.post('/user',userController.updateUser)
router.post('/user/:id',userController.deleteUser)



module.exports = router