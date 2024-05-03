import { mongoose } from '../connection/connect';

const CorredorSchema = new mongoose.Schema({
    corredor_id:Number,
    name:String,
    peso:String,
    altura:String,
    edad:Number
})
const CarreraSchema = new mongoose.Schema({
    carrera_id:Number,
    name:String,
    C_kilometers:String,
    adiccional_details:String,
    fecha:String,
    hora:String,
    race_id:{type: mongoose.Schema.Types.ObjectId, ref:'Carrera'},
    corredor_id: {type: mongoose.Schema.Types.ObjectId, ref:'Corredor'}


})
const SeguimientoSchema = new mongoose.Schema({
    id:Number,
    id_corridor: {type: mongoose.Schema.Types.ObjectId, ref:'Corredor'},
    id_carrer: {type: mongoose.Schema.Types.ObjectId, ref:'Corredor'},
    tiempo_llegada: Number,
    orden_de_llegada: Number,
    pulso_inicial: Number,
    pulso_final: Number,
})

const Corredor = mongoose.model('Corredor', CorredorSchema);
const Carrera = mongoose.model('Carrera', CarreraSchema);
const Seguimiento = mongoose.model('Seguimiento', SeguimientoSchema); 


export {Corredor, Carrera, Seguimiento }