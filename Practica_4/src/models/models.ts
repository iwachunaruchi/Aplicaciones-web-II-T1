import mongoose, {Document, Schema} from "mongoose";
import {v4 as uuidv4 } from 'uuid';

interface ICorredor extends Document{
    id: string;
    name: string;
    peso: string;
    altura: string;
    edad: string;
}
interface ICarrera extends Document{
    id:string;
    name:string;
    C_kilometers:number;
    adiccional_details:string;
    fecha: string;
    hora:string;
}
interface IFollow extends Document{
    id:string;
    id_corridor:ICorredor[];
    id_carrer:ICarrera[];
    tiempo_llegada:string;
    orden_de_llegada:string;
    pulso_inicial:number;
    pulso_final:number;
}

const corredorSchema = new Schema({
    id: {type:String, default:uuidv4},
    name: {type:String, required:true},
    peso: {type:String, required:true},
    altura: {type:String, required:true},
    edad: {type:String, required:true}
});

const carreraSchema = new Schema({
    id:{type:String, default:uuidv4},
    name:{type:String, required:true},
    C_kilometers:{type:String, required:true},
    fecha:{type:String,required:true},
    hora:{type:String, required:true},
})
const followSchema = new Schema({
    id:{type:String,default:uuidv4},
    id_corridor:[{type:Schema.Types.ObjectId, ref:'Carrera'}],
    tiempo_llegada:{type:Number, required:true},
    orden_de_llegada:{type:Number, required:true},
    pulso_inicial:{type:Number, required:true},
    pulso_final:{type:Number, required:true}
})

const Corredor = mongoose.model<ICorredor>('Corredor',corredorSchema);
const Carrera = mongoose.model<ICarrera>('Carrera',carreraSchema);
const Follow = mongoose.model<IFollow>('Follow',followSchema);

export {Corredor,Carrera,Follow};
