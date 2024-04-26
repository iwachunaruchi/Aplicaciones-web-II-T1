interface Ientity{
    Entidad:String
}
interface Icorredor{
    id:number,
    name:string,
    peso:number,
    altura:number,
    edad:number,
}
interface Icarrer{
    id:number,
    name: string,
    C_kilomters: number,
    adiccional_details: string,
    fecha:string,
    hora: string,   
}
interface Ifollow{
    id:number,
    id_corridor:Icorredor[],
    id_carrer:Icarrer[],
    tiempo_llegada: number,
    orden_de_llegada:number,
    pulso_inicial: number,
    pulso_final: number,

}
//corredores
const Carrera: Ifollow[]=[
    {
        id:1,
        id_corridor:[
            { id: 1, name: "Gustavo", peso: 70, altura: 175, edad: 30 },
            { id: 2, name: "William", peso: 65, altura: 170, edad: 28 },
            { id: 3, name: "Padilla", peso: 75, altura: 180, edad: 35 },
            { id: 4, name: "Ronny", peso: 68, altura: 172, edad: 29 },
            { id: 5, name: "Diego", peso: 72, altura: 178, edad: 32 }
        ],
        id_carrer:[
            { id: 1, name: "Carrera Mazmorra Oscura", C_kilomters: 10, adiccional_details: "Detalles", fecha: "2024-04-25", hora: "10:00" },
            { id: 2, name: "Carrera Aristocratas en extension", C_kilomters: 15, adiccional_details: "Detalles ", fecha: "2024-04-26", hora: "11:00" },
            { id: 3, name: "Carrera llamada a los dioses", C_kilomters: 20, adiccional_details: "Detalles ", fecha: "2024-04-27", hora: "12:00" },
            { id: 4, name: "Carrera Aplicaiones de las Arañas 2", C_kilomters: 12, adiccional_details: "Detalles ", fecha: "2024-04-28", hora: "13:00" },
            { id: 5, name: "Carrera Comandos desde el otro lado", C_kilomters: 18, adiccional_details: "Detalles ", fecha: "2024-04-29", hora: "14:00" }
        ],
        tiempo_llegada: 3600, 
        orden_de_llegada: 1,
        pulso_inicial: 70,
        pulso_final: 160
    }
]

export {Carrera}