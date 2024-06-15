import mongoose from "mongoose";

async function main(){
    try {
        const mongoURI ='mongodb://127.0.0.1:27017/Enlace_a_Estudiantes';
        await mongoose.connect(mongoURI);
        console.log('Conexion exitosa a la base de datos MongoDB');
    } catch (error) {
        console.log('erro en la bse de datos')
    }
}
export {main, mongoose}