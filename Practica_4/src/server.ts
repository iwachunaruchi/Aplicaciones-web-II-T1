import express from 'express';
import mongoose from 'mongoose';
import corredorRoutes from './routes/corredorRoutes';
import carreraRoutes from './routes/carreraRoutes';
import followRoutes from './routes/followRoutes';
import alumnosRoutes from './routes/alumnosRoutes';

const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/Enlace_a_Estudiantes', {

}).then(() => {
  console.log('Connected to MongoDB');
}).catch(error => {
  console.error('Error connecting to MongoDB', error);
});

app.use('/corredores', corredorRoutes);
app.use('/carreras', carreraRoutes);
app.use('/follows', followRoutes);
app.use('/alumnos', alumnosRoutes); // Registrar la nueva ruta


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
//locahost
//10.42.2.96