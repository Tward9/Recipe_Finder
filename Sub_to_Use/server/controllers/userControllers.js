const { User } = require('../models');

module.exports = {
    async createUser(req, res) {
        const newUser = User.create({
            name: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
    }
}