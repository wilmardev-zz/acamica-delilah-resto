const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const config = require("../../../config/development").config;
const { Estate, EstatesDb } = require("./entities/estate");
const mongodb = require("./db/mogodb");
const app = express();

app.use(bodyParser.json());

// Check api health
app.get("/api/v1/acamica/health", (req, res) => {
    return res.status(200).json({ status: "Ok" });
});

// Get All Estates
app.get("/api/v1/acamica/estate", (req, res) => {
    EstatesDb.find()
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).json(err));
});


// Save Estates
app.post("/api/v1/acamica/estate", (req, res) => {
    const {
        Tipodeoperacion,
        Tipodeinmueble,
        Direccion,
        Fotos,
        Ambientes,
        Metroscuadrados,
        Descripcion,
        Datosdelpropietario
    } = req.body;
    // validate data
    const userObject = new Estate(
        Tipodeoperacion,
        Tipodeinmueble,
        Direccion,
        Fotos,
        Ambientes,
        Metroscuadrados,
        Descripcion,
        Datosdelpropietario
    );
    const newEstate = new EstatesDb(userObject);
    newEstate.save((err, user) => {
        if (err) {
            return res.status(500).json(err);
        }
        return res.status(200).json(user);
    });
});


// Update user by id
app.put("/api/v1/acamica/estate", (req, res) => {
    const { _id } = req.body;
    // validate data
    EstatesDb.findOneAndUpdate({ _id: _id },
        req.body,
        (err, estateUpdated) => {
            if (err) {
                return res.status(500).json(err);
            }
            if (!estateUpdated) {
                return res.status(404).json({ message: "CHANGOS!!!!" });
            }
            return res.status(200).json(estateUpdated);
        }
    );
});

// Get User by id
app.get("/api/v1/acamica/estate/:id", (req, res) => {
    const { id } = req.params;
    EstatesDb.find({ _id: id }) //({ 'Email': new RegExp('gma', 'i') })
        .then((response) => {
            if (response.length < 1) {
                return res.status(404).json({ message: "State Not Found" });
            }
            return res.status(200).json(response);
        })
        .catch((err) => res.status(500).json(err));
});



// Delete user by id
app.delete("/api/v1/acamica/estate/:id", (req, res) => {
    const { id } = req.params;
    // validate data
    EstatesDb.findOneAndRemove({ _id: id }, (err, user) => {
        if (err) {
            return res.status(500).json(err);
        }
        if (!user) {
            return res.status(404).json({ message: "Estate Not Found" });
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