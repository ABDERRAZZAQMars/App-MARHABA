const mongoose = require('mongoose');

const userShema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please ADD Name']
    },
    email: {
        type: String,
        required: [true, 'Please ADD Email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please ADD Email']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userShema);