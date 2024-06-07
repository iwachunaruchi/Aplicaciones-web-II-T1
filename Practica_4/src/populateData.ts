import axios from 'axios';

const baseURL = 'http://localhost:3000';

const corredores = [
  { name: 'Corredor 1', peso: 70, altura: 170, edad: 25 },
  { name: 'Corredor 2', peso: 75, altura: 175, edad: 30 },
  { name: 'Corredor 3', peso: 68, altura: 168, edad: 22 },
];

const carreras = [
  { name: 'Carrera 1', C_kilomters: 10, adiccional_details: 'Primera carrera del año', fecha: '2024-06-06', hora: '08:00' },
  { name: 'Carrera 2', C_kilomters: 5, adiccional_details: 'Carrera nocturna', fecha: '2024-07-15', hora: '19:00' },
];

const addData = async () => {
  try {
    // Agregar corredores
    const corredorPromises = corredores.map(corredor => axios.post(`${baseURL}/corredores`, corredor));
    const corredorResponses = await Promise.all(corredorPromises);
    const corredorIDs = corredorResponses.map(response => response.data._id);

    // Agregar carreras
    const carreraPromises = carreras.map(carrera => axios.post(`${baseURL}/carreras`, carrera));
    const carreraResponses = await Promise.all(carreraPromises);
    const carreraIDs = carreraResponses.map(response => response.data._id);

    // Agregar follow
    const follow = {
      id_corridor: corredorIDs,
      id_carrer: carreraIDs.slice(0, 1), // solo tomar la primera carrera para el follow
      tiempo_llegada: 3600,
      orden_de_llegada: 1,
      pulso_inicial: 70,
      pulso_final: 120
    };
    
    await axios.post(`${baseURL}/follows`, follow);

    console.log('Datos agregados correctamente.');
  } catch (error) {
    console.error('Error al agregar datos:', error);
  }
};

addData();
