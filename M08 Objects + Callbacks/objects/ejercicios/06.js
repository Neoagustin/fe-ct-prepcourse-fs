const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:

  let objetos = Object.keys(objeto)
  return objetos.length
};

module.exports = contarPropiedades;
