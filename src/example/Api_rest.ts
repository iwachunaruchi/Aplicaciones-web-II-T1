function obtenerCorredores(){
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(corredores => {
        return corredores;
    })
    .catch(error => console.error('Error al obtener corredores:', error));
}
export {obtenerCorredores}