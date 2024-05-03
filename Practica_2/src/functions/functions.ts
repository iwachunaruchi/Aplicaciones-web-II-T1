import {Corredor, Carrera, Seguimiento } from '../models/model'
import { Ientity, Icorredor, Icarrer, Ifollow } from '../interfaces/interfaces'

const NewCorredor = async (corredores: Icorredor[])=>{
    corredores.forEach(corredor =>{
        const {id,name,peso,altura,edad} = corredor
        const NewCorredor = new Corredor({id,name,peso,altura,edad});
        NewCorredor.save();

    });
    return console.log('Corredores creados exitosamente');

}
const NewRace = async (race: Icarrer[])=>{
    race.forEach(carrera=>{
       const { id,name,C_kilomters,adiccional_details,fecha,hora } = carrera;
       const newRace = new Carrera({id,name,C_kilomters,adiccional_details,fecha,hora});
       newRace.save();
    })
    return console.log('Carreras Creadas Exitosamente')
};
const BuscarCorredorNombre = async(Nombre:String)=>{
    try {
        const corredorEncontrado = await Corredor.find({ 'name':Nombre });
        return corredorEncontrado;

    } catch (error) {
        console.error('Error al buscar corredor por nombre:', error);
        throw error;
    }
}
const functions = {
    NewCorredor,
    NewRace,
    BuscarCorredorNombre
}

export {functions} 