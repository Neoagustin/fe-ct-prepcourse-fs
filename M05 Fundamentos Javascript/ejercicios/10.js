function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  
  if (!(fecha instanceof Date)) {
    return false;
  }

  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const anio = fecha.getFullYear();

  const esDiaValido = dia >= 1 && dia <= 31;
  const esMesValido = mes >= 1 && mes <= 12;
  const esAnioValido = anio >= 0 && anio <= 9999;

  return esDiaValido && esMesValido && esAnioValido;
}




module.exports = esFechaValida;