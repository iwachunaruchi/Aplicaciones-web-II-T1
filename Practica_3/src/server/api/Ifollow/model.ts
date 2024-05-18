import {Schema, model} from 'mongoose';

interface Ifollow{
    id:number,
    tiempo_llegada: number,
    orden_de_llegada:number,
    pulso_inicial: number,
    pulso_final: number,
    estado: 'Activo' | 'Pendiente' | 'Eliminado';

}
const FollowSchema = new Schema<Ifollow>({
    id: {type: Number, required: true},
    tiempo_llegada: {type: Number, required: true},
    orden_de_llegada: {type: Number, required: true},
    pulso_inicial: {type: Number, required: true},
    pulso_final: {type: Number, required: true},
    estado: { 
        type: String, 
        default: 'Activo', 
        enum: ['Activo', 'Pendiente', 'Eliminado'], 
        required: true
    },
})

export default model<Ifollow>('Follow', FollowSchema);