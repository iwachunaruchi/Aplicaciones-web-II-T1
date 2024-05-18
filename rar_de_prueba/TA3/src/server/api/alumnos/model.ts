import { Schema, model } from 'mongoose';

interface IAlumno {
    id: number;
    nombre: string;
    identificacion: string;
    estado: 'Activo' | 'Pendiente' | 'Eliminado';
}

const AlumnoSchema = new Schema<IAlumno>({
    id: { type: Number, required: true },
    nombre: { type: String, required: true },
    identificacion: { type: String, required: true },
    estado: { 
        type: String, 
        default: 'Activo', 
        enum: ['Activo', 'Pendiente', 'Eliminado'],
        required: true

    },
});

export default model<IAlumno>('Alumno', AlumnoSchema);
