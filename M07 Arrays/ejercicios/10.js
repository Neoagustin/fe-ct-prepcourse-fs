function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  let numero = array[0];
  let indice = 0;

  for (let i = 0; i < array.length; i++) {
    if(array[i] > numero){
      numero = array[i];
      indice = i
    }
  }

  return indice

}

module.exports = encontrarIndiceMayor;
