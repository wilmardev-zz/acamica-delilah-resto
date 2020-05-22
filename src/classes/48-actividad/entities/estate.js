const mongoose = require("mongoose");
class Estate {
  constructor(
    tipoOperacion,
    tipoInmueble,
    direccion,
    fotos,
    ambientes,
    metrosCuadrados,
    descripcion,
    datosPropietario
  ) {
    this.TipoOperacion = tipoOperacion;
    this.TipoInmueble = tipoInmueble;
    this.Direccion = direccion;
    this.Fotos = fotos;
    this.Ambientes = ambientes;
    this.MetrosCuadrados = metrosCuadrados;
    this.Descripcion = descripcion;
    this.DatosPropietario = datosPropietario;
    this.CreatedDate = Date.now();
  }
}

const EstatesDb = mongoose.model(
  "Estates",
  {
    TipoOperacion: String,
    TipoInmueble: String,
    Direccion: String,
    Fotos: String,
    Ambientes: String,
    MetrosCuadrados: Number,
    Descripcion: String,
    DatosPropietario: String,
    CreatedDate: Date,
  },
  "Estate"
);

module.exports = { Estate, EstatesDb };
