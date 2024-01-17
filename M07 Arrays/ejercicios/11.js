function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  let numeroMultiplicado = []

  for (let i = 0; i < array.length; i++) {  
    numeroMultiplicado.push(array[i] * i);
  }

  return numeroMultiplicado
}

module.exports = multiplicarElementosPorIndice;
