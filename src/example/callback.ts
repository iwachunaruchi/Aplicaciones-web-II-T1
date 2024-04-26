import {Icarrer,carreras} from "./tablas/carrera";
import {Icorredor,corredores} from "./tablas/Corredor"
import {Seguimiento,Ifollow} from "./tablas/seguimiento"

function buscarPorID<T>(arreglo: T[], id: number, callback: (elemento: T) => boolean): T | undefined {
    return arreglo.find(callback);
}

// Callback para buscar un corredor por su ID
// Callback para buscar un corredor por su ID
function buscarCorredorPorID(id: number) {
    return function(corredor: Icorredor): boolean {
        return corredor.id === id;
    };
}
function buscadorSegundoPorID(id: number){
    return function(seguimiento: Ifollow): boolean{
        return seguimiento.id === id;

    }
}
function buscarCarreraPorID(id:number){
    return function(carreras: Icarrer): boolean{
        return carreras.id === id;
    }
}

// Función principal para buscar un objeto por su ID en el arreglo adecuado usando el callback
// Función principal para buscar un objeto por su ID en el arreglo adecuado usando el callback
function buscarElementoPorID(tipo: string, id: number) {
    let elemento;

    switch (tipo) {
        case 'corredor':
            elemento = buscarPorID(corredores, id, buscarCorredorPorID(id));
            break;
        case 'seguimiento':
            elemento = buscarPorID(Seguimiento, id, buscadorSegundoPorID(id));
            break;
        case 'carreras':
            elemento = buscarPorID(carreras, id,  buscarCarreraPorID(id));
        default:
            console.log('Tipo de elemento no válido');
    }

    return elemento;
}

// Llamada a la función para buscar un corredor por su ID

export {buscarElementoPorID}