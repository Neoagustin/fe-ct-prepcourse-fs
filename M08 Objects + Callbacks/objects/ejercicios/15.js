function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:

  let array = Object.keys(objeto);
  for (let i = 0; i < array.length; i++) {
    if(array[i] === propiedad) return true
  }

  return false
}

module.exports = tienePropiedad;
