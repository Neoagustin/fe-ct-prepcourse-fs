function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  numeros.sort();
  for (let i = 0; i < numeros.length; i++) {
    if((numeros[i] === numeros[i + 1])){
      return numeros[i]
    }
  }

  return undefined
}

module.exports = encontrarElementoRepetido;