import { Schema, model } from "mongoose";

interface Icarrer{
    id:number,
    name: string,
    C_kilomters: number,
    adiccional_details: string,
    fecha:string,
    hora: string,   
    estado: 'Activo' | 'Pendiente' | 'Eliminado';

}

const CarreraSchema = new Schema<Icarrer>({

    id:{type:Number, required:true},
    name:{type: String, required:true},
    C_kilomters:{type:Number, required:true},
    adiccional_details:{type:String, required:true},
    fecha:{type:String, required:true},
    hora:{type:String, required:true},
    estado:{
        type:String,
        default:'Activo',
        enum:['Activo','Pendiente','Eliminado'],
        required:true
    }
})
export default model<Icarrer>('Carrera',CarreraSchema);