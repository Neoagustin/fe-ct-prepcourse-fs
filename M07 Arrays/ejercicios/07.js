function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  let nuevoArreglo = []

  for (let i = 0; i < array.length; i++) {
    if(typeof array[i] === 'string'){
      nuevoArreglo.push(array[i].toUpperCase());
    }
  }

  return nuevoArreglo
}

module.exports = convertirStringAMayusculas;
