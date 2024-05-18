import { IAlumno, IAsignatura, INota } from '../interfaces/Interfaces';



const alumnos: IAlumno[] = [
    {
        id:1,
        nombre: 'Juan Perez',
        identificacion: 123456
    },
    {
        id:2,
        nombre: 'Maria Lopez',
        identificacion: 654321
    },
    {
        id:3,
        nombre: 'Pedro Jimenez',
        identificacion: 456789
    },
    {
        id:4,
        nombre: 'Ana Rodriguez',
        identificacion: 987654
    },
    {
        id:5,
        nombre: 'Luisa Perez',
        identificacion: 321654
    },
    {
        id:6,
        nombre: 'Carlos Jimenez',
        identificacion: 654987
    },
    {
        id:7,
        nombre: 'Sofia Rodriguez',
        identificacion: 789456
    },
    {
        id:8,
        nombre: 'Andres Perez',
        identificacion: 654789
    },
    {
        id:9,
        nombre: 'Jorge Jimenez',
        identificacion: 987456
    },
    {
        id:10,
        nombre: 'Marta Rodriguez',
        identificacion: 456123
    }
];

const asignaturas: IAsignatura[] = [
    {
        id: 1,
        descripcion: 'Matematicas',
        nivel: 1,
        numero_creditos: 4
    },
    {
        id: 2,
        descripcion: 'Lenguaje',
        nivel: 1,
        numero_creditos: 4
    },
    {
        id: 3,
        descripcion: 'Ciencias',
        nivel: 1,
        numero_creditos: 4
    },
    {
        id: 4,
        descripcion: 'Sociales',
        nivel: 1,
        numero_creditos: 4
    },
    {
        id: 5,
        descripcion: 'Educacion Fisica',
        nivel: 1,
        numero_creditos: 4
    },
    {
        id: 6,
        descripcion: 'Informatica',
        nivel: 1,
        numero_creditos: 4
    },
    {
        id: 7,
        descripcion: 'Artes',
        nivel: 1,
        numero_creditos: 4
    },
    {
        id: 8,
        descripcion: 'Musica',
        nivel: 1,
        numero_creditos: 4
    },
    {
        id: 9,
        descripcion: 'Religion',
        nivel: 1,
        numero_creditos: 4
    },
    {
        id: 10,
        descripcion: 'Etica',
        nivel: 1,
        numero_creditos: 4
    }
]



const notasPrueba: Object[] = [
    {
        id: 1,
        parcial: 1,
        alumno: [], // ID del primer alumno obtenido
        asignatura: [], // ID de la primera asignatura obtenida
        nota: 85,
        observacion: 'Buena participación',
        estado: true
    },
    {
        id: 2,
        parcial: 1,
        alumno: [],
        asignatura: [],
        nota: 70,
        observacion: 'Buena participación',
        estado: true
    },
    {
        id: 3,
        parcial: 1,
        alumno: [],
        asignatura: [],
        nota: 60,
        observacion: 'Buena participación',
        estado: true
    },
    {
        id: 4,
        parcial: 1,
        alumno: [],
        asignatura: [],
        nota: 90,
        observacion: 'Buena participación',
        estado: true
    },
    {
        id: 5,
        parcial: 1,
        alumno: [],
        asignatura: [],
        nota: 75,
        observacion: 'Buena participación',
        estado: true
    },
    {
        id: 6,
        parcial: 1,
        alumno: [],
        asignatura: [],
        nota: 95,
        observacion: 'Buena participación',
        estado: true
    },
    {
        id: 7,
        parcial: 1,
        alumno: [],
        asignatura: [],
        nota: 80,
        observacion: 'Buena participación',
        estado: true
    },
    {
        id: 8,
        parcial: 1,
        alumno: [],
        asignatura: [],
        nota: 65,
        observacion: 'Buena participación',
        estado: true
    },
    {
        id: 9,
        parcial: 1,
        alumno: [],
        asignatura: [],
        nota: 55,
        observacion: 'Buena participación',
        estado: true
    },
    {
        id: 10,
        parcial: 1,
        alumno: [],
        asignatura: [],
        nota: 100,
        observacion: 'Buena participación',
        estado: true
    }
];

export { alumnos, asignaturas, notasPrueba };