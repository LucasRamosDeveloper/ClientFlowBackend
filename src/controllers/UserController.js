const User = require('../models/User')

class UserController {
    async createUser(req, res) {

        //const user = await User.create({ user: 'Lucas', password:'123456' })
        const user = await User.create({ 
            user: req.body.user, 
            password: req.body.password 
        })

        return res.json(user)
    }
}

module.exports = new UserController();