const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const usersModel = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 8,
    },
    // firstName: {
    //     type: String,
    //     required: true,
    //     minLength: 3,
    //     maxLength: 15,
    // },
    // lastName: {
    //     type: String,
    //     required: true,
    //     minLength: 3,
    //     maxLength: 15,
    // },
    // dob: {
    //     type: Date,
    //     // require: true
    // },
    // createdAt: {
    //     type: Date,
    //     timeStamp: true
    // },
    // updatedAt: {
    //     type: Date,
    //     timeStamp: true
    // },
    password: {
        type: String,
        required: true
    }

})

usersModel.pre('save', function () {
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
    console.log(this);
})

usersModel.methods.comparePassword = function (password) {

    return bcrypt.compare(password, this.password)

}

const UsersModel = mongoose.model('Users', usersModel);
module.exports = UsersModel;
