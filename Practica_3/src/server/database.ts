import mongoose, { ConnectOptions } from "mongoose";

export const connect = ( options: ConnectOptions = {})=>{
    const dburl = 'mongodb://127.0.0.1:27017/proyecto_aplicaciones_webII';
    mongoose.connect(dburl, options).then(()=>{
        console.log('Database connected');

    }).catch((err: Error) => {
        console.error(`Database connection error: ${err}`);
    });
    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    });
    process.on('SIGINT', async () => {
        try {
            await mongoose.connection.close();
            console.log('Database connection disconnected through app termination');
            process.exit(0);
        } catch (err) {
            console.error(`Error disconnecting from the database: ${err}`);
            process.exit(1);
        }
    });
}
export const disconnect = async () => {
    try {
        await mongoose.connection.close();
        console.log('Database disconnected');
    } catch (err) {
        console.error(`Error disconnecting from the database: ${err}`);
    }
};

