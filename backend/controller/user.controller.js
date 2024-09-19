const db = require('../db')
const User = require('../model/user')
const bcrypt = require('bcryptjs');

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
                message: 'Error creating user',
                error: error.message
            });
        }
    }
    async getUsers(req,res){

    }
    async getOneUser(req,res){

    }
    async updateUser(req,res){

    }
    async deleteUser(req,res){

    }
}
module.exports= new UserController()