function verificarPropiedad(objeto, propiedad) {
  // Verifica si el objeto posee la propiedad recibida.
  // Retorna true si la tiene, sino retorna false.
  // PISTA: Puedes usar el método hasOwnProperty().
  // Tu código:

  if (objeto.propertyIsEnumerable(propiedad)) {
    return false;
  }

  if((propiedad in objeto)){
    return true
  }

  return objeto.hasOwnProperty(propiedad);
}

module.exports = verificarPropiedad;
