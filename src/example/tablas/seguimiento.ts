import {Icarrer,carreras} from "./carrera"
import {Icorredor,corredores} from "./Corredor"

interface Ifollow{
    id:number,
    id_corridor:Icorredor[],
    id_carrer:Icarrer[],
    tiempo_llegada: number,
    orden_de_llegada:number,
    pulso_inicial: number,
    pulso_final: number,

}
const Seguimiento: Ifollow[] =[
    {
        id:1,
        id_corridor:corredores,
        id_carrer:carreras,
        tiempo_llegada: 3600, // Tiempo en segundos
        orden_de_llegada: 1,
        pulso_inicial: 70,
        pulso_final: 160
    }
]
export {Ifollow,Seguimiento,}