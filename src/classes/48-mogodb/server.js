const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const config = require("../../config/development").config;
const { User, UserDb } = require("./entities/user");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect(config.DataBaseConfig.CnxString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connect to Mongo Db successfully.."));

app.use(bodyParser.json());

const validateJwtMiddleware = (req, res, next) => {
  const jwtToken = req.headers["authorization"];
  if (!jwtToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const jwtClient = jwtToken.split(" ")[1];
  jwt.verify(jwtClient, config.JwtSecretKey, (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Token Expired" });
    }
    next();
  });
};

// Check api health
app.get("/api/v1/acamica/health", (req, res) => {
  return res.status(200).json({ status: "Ok" });
});

// Get All Users
app.get("/api/v1/acamica/user", validateJwtMiddleware, (req, res) => {
  UserDb.find()
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(500).json(err));
});

// Save User
app.post("/api/v1/acamica/user", validateJwtMiddleware, (req, res) => {
  const { userName, lastName, pass, email, age } = req.body;
  // validate data
  const userObject = new User(userName, lastName, pass, email, age);
  const newUser = new UserDb(userObject);
  newUser.save((err, user) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(user);
  });
});

// Get User by Email
app.get("/api/v1/acamica/user/:email", validateJwtMiddleware, (req, res) => {
  const { email } = req.params;
  UserDb.find({ Email: email }) //({ 'Email': new RegExp('gma', 'i') })
    .then((response) => {
      if (response.length < 1) {
        return res.status(404).json({ message: "User Not Found" });
      }
      return res.status(200).json(response);
    })
    .catch((err) => res.status(500).json(err));
});

// Update user by email
app.put("/api/v1/acamica/user", validateJwtMiddleware, (req, res) => {
  const { userName, lastName, pass, email, age } = req.body;
  // validate data
  const userUpdate = {
    UserName: userName,
    LastName: lastName,
    Password: pass,
    Age: age,
  };
  UserDb.findOneAndUpdate({ Email: email }, userUpdate, (err, userUpdated) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (!userUpdated) {
      return res.status(404).json({ message: "User Not Found" });
    }
    return res.status(200).json(userUpdated);
  });
});

// Delete user by email
app.delete("/api/v1/acamica/user/:email", validateJwtMiddleware, (req, res) => {
  const { email } = req.params;
  // validate data
  UserDb.findOneAndRemove({ Email: email }, (err, user) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    return res.status(204).json();
  });
});

// Login with JWT
app.post("/api/v1/acamica/login", (req, res) => {
  const { user, pass } = req.body;
  if (user !== config.LoginInfo.User || pass !== config.LoginInfo.Password) {
    return res.status(401).json({ message: "Invalid user or password" });
  }
  const payload = { user, pass };
  const jwtToken = jwt.sign(payload, config.JwtSecretKey, {
    expiresIn: config.JwtExpiresToken,
  });
  return res.status(200).json({ token: jwtToken });
});

app.listen(config.Port, () => {
  console.log(`Servidor iniciado en el puerto ${config.Port}`);
});
