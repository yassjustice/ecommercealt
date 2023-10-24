const { UserService } = require('../services/userService')
const { UserRepository } = require('../repositories/userRepository')
const User = require('../models/User')

const userRepo = new UserRepository(User)

const userServ = new UserService(userRepo)

// login a user
const loginUser = async (req, res) => {
    const user = await userServ.Login(req)
    res.json(user)
}
const getUsers = async (req, res) =>{
    // console.log(req);
    const users = await userServ.getUsers(req);
    res.json(users)
}

module.exports = { loginUser, getUsers }