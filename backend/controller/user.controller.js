const db = require('../db')
const User = require('../model/user')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

class UserController{
    async createUser(req,res){
        try{
            const {login,password}=req.body
            // const isUsed = await User.findOne({name})
            // if(isUsed){
            //     return res.json({
            //         message: 'Данный name уже занят'
            //     })
            // }
            
            var salt = bcrypt.genSaltSync(10)
            var hashPass = bcrypt.hashSync(password,salt)
            console.log(login,password,hashPass)
            const newPerson = await User.create({
                login: login,
                password: hashPass
            })
            res.status(200).json({
                message: newPerson
            })
        }catch(error){
            res.status(500).json({
                message: 'Ошибка при создании пользователя.',
                error: error.message
            });
        }
    }
    async loginUser(req,res){
        try{
            const {login,password}=req.body
            const user = await User.findOne({login})
            if(!user){
                return res.json({
                    message: 'Такого пользователя не существует!'
                })
            }
            const isPasswordCorrect = await bcrypt.compare(password,user.password)
            if(!isPasswordCorrect){
                return res.json({
                    message: 'Неверный пароль.'
                })
            }
            const token = jwt.sign({
                id: user.id
            },process.env.JWT_SECRET,
            {expiresIn:'30d'})
            res.json({
                token,
                user,
                message: 'Вы вошли в систему'
            })

        }catch(error){
            res.status(500).json({
                message: 'Ошибка при авторизации пользователя.',
                error: error.message
            });
        }

    }
    async getUserDate(req,res){
        try{
            const user = await User.findOne({
                where: {id:req.id}
            })
            if(!user){
                return res.json({
                    message: 'Такого пользователя не существует!'
                })
            }

            const token = jwt.sign({
                id: user.id
            },
            process.env.JWT_SECRET,
        {expiresIn:'30d'})
        return res.json({
            token,
            user,
            message: 'Вы вошли в систему.'
        })
        }catch(error){
            res.status(500).json({
                message: 'Нет доступа',
                error: error.message
            });
        }
    }
    async updateUser(req,res){

    }
    async deleteUser(req,res){

    }
}
module.exports= new UserController()