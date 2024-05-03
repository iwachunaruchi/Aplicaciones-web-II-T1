
import {buscarElementoPorID} from "./example/callback"
import { obtenerCorredores } from "./example/Api_rest"
import {Seguimiento} from "./example/tablas/seguimiento"
import { corredores } from "./example/tablas/Corredor"
//mostrar en la consola la funcion de buscar elemento con el parametro tipo string y el number
console.log(buscarElementoPorID('corredor', 4));
//
//for each para traer seguimeinto con sus datos para poder hacer un for each y acceder directamente a los corredores desde el siguiento de x carrera
const data = Seguimiento;
data.forEach((objeto)=>{
      objeto.id_corridor.forEach((corredor)=>{
        console.log(`Id:${corredor.id}, Nombre: ${corredor.name}`);
      })
})
//funcion para consumir el apy rest gratuito
async function ConsumirDatos(){
    const insert_data:any =await obtenerCorredores();
    Buscar_relacion_name(insert_data);
}
//dependiendo de lo que me traer la ApiRest busco en el array de corredores, los corredores de los que son iguales en el nombre y los muestro
function Buscar_relacion_name(insert_data:any){
    insert_data.forEach((objeto:any)=>{
        const corredorEncontrado = corredores.find(corredor => corredor.name === objeto.name);
        if (corredorEncontrado) {
            console.log(`se encontro el corredor con la id ${objeto.id}, nombre: ${objeto.name}`);
        } else {
            console.log(`No se encontró un corredor con ID ${objeto.id}`);
        }
    })
}
ConsumirDatos();


