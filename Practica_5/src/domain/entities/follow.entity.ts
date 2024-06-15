import mongoose, { Document, Schema } from 'mongoose';

export interface Follow extends Document {
    id: string;
    id_carrera: string;
    tiempo_llegada: number;
    orden_de_llegada: number;
    pulso_inicial: number;
    pulso_final: number;
}

const FollowSchema: Schema = new Schema({
    id: { type: String, required: true },
    id_carrera: { type: String, required: true },
    tiempo_llegada: { type: Number, required: true },
    orden_de_llegada: { type: Number, required: true },
    pulso_inicial: { type: Number, required: true },
    pulso_final: { type: Number, required: true },
});

export const FollowModel = mongoose.model<Follow>('Follow', FollowSchema);
