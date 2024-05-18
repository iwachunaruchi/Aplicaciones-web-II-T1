
import {Schema, model} from 'mongoose';

interface Icorredor{
    id:number,
    name:string,
    peso:number,
    altura:number,
    edad:number,
    estado: 'Activo' | 'Pendiente' | 'Eliminado';

}
const corredorSchema = new Schema<Icorredor>({
    id:{type:Number, required:true},
    name:{type:String, required:true},
    peso:{type:Number, required:true},
    altura:{type:Number, required:true},
    edad:{type:Number, required:true},
    estado: { 
        type: String, 
        default: 'Activo', 
        enum: ['Activo', 'Pendiente', 'Eliminado'], 
        required: true
    },
})
export default model<Icorredor>('corredor', corredorSchema);