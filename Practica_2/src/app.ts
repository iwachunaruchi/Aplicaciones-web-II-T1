console.log('hola')
import { main } from "./connection/connect"
import { Ientity, Icorredor, Icarrer, Ifollow } from './interfaces/interfaces';
import { functions } from "./functions/functions";

const Corredores: Icorredor[]=[
    { id: 1, name: "Gustavo", peso: 70, altura: 175, edad: 30 },
    { id: 2, name: "William", peso: 65, altura: 170, edad: 28 },
    { id: 3, name: "Padilla", peso: 75, altura: 180, edad: 35 },
    { id: 4, name: "Ronny", peso: 68, altura: 172, edad: 29 },
    { id: 5, name: "Diego", peso: 72, altura: 178, edad: 32 },
    { id: 6, name: "Jose", peso: 60, altura: 160, edad: 35 },
    { id: 7, name: "Cañizares", peso: 85, altura: 178, edad: 27 },
    { id: 8, name: "Jampierre", peso: 95, altura: 180, edad: 37 },
    { id: 9, name: "Lopez", peso: 168, altura: 172, edad: 22 },
    { id: 10, name: "Alexander", peso: 152, altura: 178, edad: 42 }
]

const Carreras: Icarrer[]=[
    { id: 1, name: "Carrera Mazmorra Oscura", C_kilomters: 10, adiccional_details: "Detalles", fecha: "2024-04-25", hora: "10:00" },
    { id: 2, name: "Carrera Aristocratas en extension", C_kilomters: 15, adiccional_details: "Detalles ", fecha: "2024-04-26", hora: "11:00" },
    { id: 3, name: "Carrera llamada a los dioses", C_kilomters: 20, adiccional_details: "Detalles ", fecha: "2024-04-27", hora: "12:00" },
    { id: 4, name: "Carrera Aplicaiones de las Arañas 2", C_kilomters: 12, adiccional_details: "Detalles ", fecha: "2024-04-28", hora: "13:00" },
    { id: 5, name: "Carrera Comandos desde el otro lado", C_kilomters: 18, adiccional_details: "Detalles ", fecha: "2024-04-29", hora: "14:00" },

    { id: 6, name: "Carrera Mazmorra", C_kilomters: 10, adiccional_details: "Detalles", fecha: "2024-04-25", hora: "10:00" },
    { id: 7, name: "Carrera Aristocratas", C_kilomters: 15, adiccional_details: "Detalles ", fecha: "2024-04-26", hora: "11:00" },
    { id: 8, name: "Carrera llama", C_kilomters: 20, adiccional_details: "Detalles ", fecha: "2024-04-27", hora: "12:00" },
    { id: 9, name: "Carrera Aplicai", C_kilomters: 12, adiccional_details: "Detalles ", fecha: "2024-04-28", hora: "13:00" },
    { id: 10, name: "Carrera Comandos", C_kilomters: 18, adiccional_details: "Detalles ", fecha: "2024-04-29", hora: "14:00" }
]
//functions.NewCorredor(Corredores)
//functions.NewRace(Carreras)
async function ejemplo(){
    const NombreCorredor = 'Jose';
    try {
        const corredorEncontrado = await functions.BuscarCorredorNombre(NombreCorredor);
        console.log('Corredor encontrado:', corredorEncontrado);
    } catch (error) {
        console.error('Error:', error);

    }
}
ejemplo();
main();