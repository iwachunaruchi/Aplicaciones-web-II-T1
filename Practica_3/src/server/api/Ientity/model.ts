import {Schema, model} from 'mongoose';

interface Ientity{
    Entidad:String
}

const entitySchema = new Schema<Ientity>({
    Entidad:String    
})

export default model<Ientity>('Entidad', entitySchema);
