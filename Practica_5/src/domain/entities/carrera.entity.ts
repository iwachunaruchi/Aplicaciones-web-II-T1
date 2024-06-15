import mongoose, { Document, Schema } from 'mongoose';

export interface Carrera extends Document {
    id: string;
    name: string;
    C_kilometers: number;
    adiccional_details: string;
    fecha: string;
    hora: string;
}

const CarreraSchema: Schema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    C_kilometers: { type: Number, required: true },
    adiccional_details: { type: String, required: true },
    fecha: { type: String, required: true },
    hora: { type: String, required: true },
});

export const CarreraModel = mongoose.model<Carrera>('Carrera', CarreraSchema);
