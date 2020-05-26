const mongoose = require("mongoose");
class Estate {
    constructor(Tipodeoperacion, Tipodeinmueble, Direccion, Fotos, Ambientes, Metroscuadrados, Descripcion, Datosdelpropietario) {
        this.Tipodeoperacion = Tipodeoperacion;
        this.Tipodeinmueble = Tipodeinmueble;
        this.Direccion = Direccion;
        this.Fotos = Fotos;
        this.Ambientes = Ambientes;
        this.Metroscuadrados = Metroscuadrados;
        this.Descripcion = Descripcion;
        this.Datosdelpropietario = Datosdelpropietario;
        this.CreatedDate = Date.now();
    }
}

const EstatesDb = mongoose.model(
    "Estates", //Nombre del modelo
    {
        Tipodeoperacion: String,
        Tipodeinmueble: String,
        Direccion: String,
        Fotos: String,
        Ambientes: String,
        Metroscuadrados: Number,
        Descripcion: String,
        Datosdelpropietario: String,
        CreatedDate: String
    },
    "Estate"
);

module.exports = { Estate, EstatesDb };