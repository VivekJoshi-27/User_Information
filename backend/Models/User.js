const mongoose = require("mongoose")


// create Schema(format) for database//

const userSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    mobNumber:Number

})

module.exports = mongoose.model("user", userSchema);