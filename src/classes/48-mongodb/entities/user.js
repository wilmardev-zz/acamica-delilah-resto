const mongoose = require("mongoose");
class User {
    constructor(userName, lastName, password, email, age) {
        this.UserName = userName;
        this.LastName = lastName;
        this.Password = password;
        this.Email = email;
        this.Age = age;
        this.CreatedDate = Date.now();
    }
}

const UserDb = mongoose.model(
    "Users", //Nombre del modelo
    {
        UserName: String,
        LastName: String,
        Password: String,
        Age: Number,
        Email: String,
        CreatedDate: Date,
    },
    "User"
);

module.exports = { User, UserDb };