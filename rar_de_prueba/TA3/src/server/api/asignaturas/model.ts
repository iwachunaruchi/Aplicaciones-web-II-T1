import {Schema, model} from 'mongoose';

interface IAsignatura {
    id: number;
    descripcion: string;
    nivel: number;
    numero_creditos: number;
    estado: 'Activo' | 'Pendiente' | 'Eliminado';
}

const AsignaturaSchema = new Schema<IAsignatura>({
    id: { type: Number, required: true },
    descripcion: { type: String, required: true },
    nivel: { type: Number, required: true },
    numero_creditos: { type: Number, required: true },
    estado: { 
        type: String, 
        default: 'Activo', 
        enum: ['Activo', 'Pendiente', 'Eliminado'], 
        required: true
    },
});

export default model<IAsignatura>('Asignatura', AsignaturaSchema);