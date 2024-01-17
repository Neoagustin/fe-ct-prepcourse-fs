function esNuloOIndefinido(valor) {
  // La función recibe un argumento "valor".
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Tu código:

  const isTrue = (valor === undefined || valor === null) ? true : false
  return isTrue
}

module.exports = esNuloOIndefinido;