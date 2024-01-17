function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  let numerosSumados = 0;

  for (let i = 0; i < arrayOfNums.length; i++) {
    numerosSumados += arrayOfNums[i];
  }

  return numerosSumados;
}

module.exports = agregarNumeros;
