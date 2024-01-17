function actualizarValorPropiedad(objeto, propiedad, valor) {
  // Actualiza el valor de la propiedad del objeto recibidos en la función.
  // Retorna el objeto actualizado.
  // Tu código:

  const objetoActualizado = { ...objeto };
  objetoActualizado[propiedad] = valor;
  return objetoActualizado;
}

module.exports = actualizarValorPropiedad;
