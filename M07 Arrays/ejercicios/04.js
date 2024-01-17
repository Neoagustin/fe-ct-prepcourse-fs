function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:

  const indiceAleatorio = Math.round(Math.random() * (array.length - 1));
  return array[indiceAleatorio];
}

module.exports = obtenerElementoAleatorio;
