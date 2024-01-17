function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  let resultado = 1;

  if (a <= b) {
    for (let i = a; i <= b; i++) {
      resultado *= i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      resultado *= i;
    }
  }

  return Math.abs(resultado);
}

module.exports = productoEntreNúmeros;