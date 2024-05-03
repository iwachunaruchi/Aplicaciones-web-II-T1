import mongoose from "mongoose";
main().catch(err => console.log(err));


async function main() {
    try {
        // URL de conexión a tu base de datos MongoDB
        const mongoURI = 'mongodb://127.0.0.1:27017/proyecto_aplicaciones_webII';
    
        // Conexión a la base de datos
        await mongoose.connect(mongoURI);
    
        console.log('Conexión exitosa a la base de datos MongoDB');
      } catch (error) {
        
      }
    
}

export { main, mongoose }