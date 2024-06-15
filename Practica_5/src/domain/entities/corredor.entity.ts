import mongoose, { Document, Schema } from 'mongoose';

export interface Corredor extends Document{
    id: string;
    name: string;
    peso: number;
    altura: string;
    edad: number;
}
const CorredorSchema: Schema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    peso: { type: Number, required: true },
    altura: { type: String, required: true },
    edad: { type: Number, required: true },
});
export const CorredorModel = mongoose.model<Corredor>('Corredor', CorredorSchema)