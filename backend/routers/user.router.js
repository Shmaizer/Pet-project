const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controller')
const checkAuth = require('../middleware/checkAuth')

router.post('/register',userController.createUser)
router.post('/login',userController.loginUser)
router.get('/user/:id',checkAuth,userController.getUserDate)
router.put('/user',userController.updateUser)
router.delete('/user/:id',userController.deleteUser)



module.exports = router