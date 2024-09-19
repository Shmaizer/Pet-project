const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controller')
const cheackAuth = require('../middleware/checkAuth')
router.post('/register',userController.createUser)
router.post('/login',userController.loginUser)
router.post('/user/:id',cheackAuth,userController.getOneUser)
router.post('/user',userController.updateUser)
router.post('/user/:id',userController.deleteUser)



module.exports = router