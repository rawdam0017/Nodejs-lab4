const User = require('../models/users');
const jwt = require('jsonwebtoken');

const create = (user) => User.create(user);
const login = async ({ username, password }) => {
    const user = await User.findOne({ username })
    const valid = await user.comparePassword(password)
    if (!valid) throw "UN_AUTH"
    return jwt.sign({
        username,
        userId: user.id
    }, 'gh3f4h345j5kh3h4123h21lk3j128uedhukjdbyt67tt75uyjv56ujn', { expiresIn: '1h' });



    // return ('user with token');

}

module.exports = {
    create,
    login
}