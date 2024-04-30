const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
});
userSchema.plugin(passportLocalMongoose); //Vai adicionar username e password
//Vamos criar um modelo chamado "User" a partir do esquema e
//vamos exporta-lo
module.exports = mongoose.model("User", userSchema);