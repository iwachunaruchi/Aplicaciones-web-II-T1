import {Schema, model} from 'mongoose';

interface INota {
    id: number;
    alumno: Object;
    asignatura:    Object;
    parcial: number;
    nota: number;
    observacion: string;
    estado: 'Activo' | 'Pendiente' | 'Eliminado';
}

const NotaSchema = new Schema<INota>({
    id: { type: Number, required: true },
    alumno: { type: Schema.Types.ObjectId, ref: 'Alumno'},
    asignatura: { type: Schema.Types.ObjectId, ref: 'Asignatura'},
    parcial: { type: Number, required: true },
    nota: { type: Number, required: true },
    observacion: { type: String, required: false },
    estado: { 
        type: String, 
        default: 'Activo', 
        enum: ['Activo', 'Pendiente', 'Eliminado'], 
        required: true
    },
});

export default model<INota>('Nota', NotaSchema);