function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:

  let contador = 0;

  for (let i = 0; i < numeros.length; i++) {
    contador++
    if(numeros[i] !== contador){
      return contador
    }
  }

  if(numeros.length === 0){
    return null
  }

  return null
}

module.exports = encontrarNumeroFaltante;