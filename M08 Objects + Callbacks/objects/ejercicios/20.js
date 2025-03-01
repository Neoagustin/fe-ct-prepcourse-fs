function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:

  let postsArray = objetoUsuario.posts;
  let sumarLikes = 0;

  postsArray.forEach(posts => {
    sumarLikes += posts.likes
  });

  return sumarLikes
}

module.exports = sumarLikesDeUsuario;
