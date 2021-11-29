const mongoose = require('mongoose')

const managerSchema =mongoose.Schema({
    _code: mongoose.Schema.Types.ObjectId,
    userName: String,
    password: String,

});
const Manager = mongoose.model('Manager', managerSchema)
