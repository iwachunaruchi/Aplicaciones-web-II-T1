import {carreras} from "./example/tablas/carrera"
import {buscarElementoPorID} from "./example/callback"
import { obtenerCorredores } from "./example/Api_rest"
import {Seguimiento} from "./example/tablas/seguimiento"
import { corredores } from "./example/tablas/Corredor"
// console.log(buscarElementoPorID('carreras', 4));

// console.log(Seguimiento);
// const data = Seguimiento;
// data.forEach((objeto)=>{
//      objeto.id_corridor.forEach((corredor)=>{
//          console.log(`Id:${corredor.id}, Nombre: ${corredor.name}`);
//      })
// })

async function ConsumirDatos(){
    const insert_data:any =await obtenerCorredores();
    Buscar_relacion_name(insert_data);
}
function Buscar_relacion_name(insert_data:any){
    console.log(insert_data);
    insert_data.forEach((objeto:any)=>{
        const corredorEncontrado = corredores.find(corredor => corredor.name === objeto.name);
        if (corredorEncontrado) {
            console.log(corredorEncontrado);
        } else {
            console.log(`No se encontró un corredor con ID ${objeto.id}`);
        }
    })
}
ConsumirDatos();


