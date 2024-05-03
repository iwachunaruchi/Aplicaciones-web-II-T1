//funcion callback que me busca pidiendo dos parametros el tipo de array y la id
import {Icarrer,carreras} from "./tablas/carrera";
import {Icorredor,corredores} from "./tablas/Corredor"
import {Seguimiento,Ifollow} from "./tablas/seguimiento"

//funcion que nos devolvera el dato
function buscarPorID<T>(arreglo: T[], id: number, callback: (elemento: T) => boolean): T | undefined {
    return arreglo.find(callback);
}

//buscar con la id el corredor
function buscarCorredorPorID(id: number) {
    return function(corredor: Icorredor): boolean {
        return corredor.id === id;
    };
}
//buscar por id el seguimiento de las carreras
function buscadorSegundoPorID(id: number){
    return function(seguimiento: Ifollow): boolean{
        return seguimiento.id === id;

    }
}
//buscar la carrera en base a la Id
function buscarCarreraPorID(id:number){
    return function(carreras: Icarrer): boolean{
        return carreras.id === id;
    }
}
//donde llega los datos desde el app.ts que seria un tipo string y una id 
function buscarElementoPorID(tipo: string, id: number) {
    let elemento;
    //hice un switchcase que en base al tipo me lleve al callback con los parametros
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

// exportar la funcion

export {buscarElementoPorID}