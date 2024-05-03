//interfaz paras carreras
interface Icarrer{
    id:number,
    name: string,
    C_kilomters: number,
    adiccional_details: string,
    fecha:string,
    hora: string,   
}
const carreras:Icarrer[]=[
    { id: 1, name: "Carrera Mazmorra Oscura", C_kilomters: 10, adiccional_details: "Detalles", fecha: "2024-04-25", hora: "10:00" },
    { id: 2, name: "Carrera Aristocratas en extension", C_kilomters: 15, adiccional_details: "Detalles ", fecha: "2024-04-26", hora: "11:00" },
    { id: 3, name: "Carrera llamada a los dioses", C_kilomters: 20, adiccional_details: "Detalles ", fecha: "2024-04-27", hora: "12:00" },
    { id: 4, name: "Carrera Aplicaiones de las Arañas 2", C_kilomters: 12, adiccional_details: "Detalles ", fecha: "2024-04-28", hora: "13:00" },
    { id: 5, name: "Carrera Comandos desde el otro lado", C_kilomters: 18, adiccional_details: "Detalles ", fecha: "2024-04-29", hora: "14:00" }
    
]
export {Icarrer,carreras}; 