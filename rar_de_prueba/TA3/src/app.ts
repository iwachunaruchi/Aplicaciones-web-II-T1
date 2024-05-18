import { mongoose } from "./connection/db";
import { functions } from "./functions/Functions";
import { IAlumno, IAsignatura, INota } from "./interfaces/Interfaces";
import {alumnos, asignaturas, notasPrueba} from "./seeders/seeders";

    //Crear un nuevos alumno
    //functions.newAlumno(alumnos);

    // functions.searchAlumno(6).then((alumno) => {
    //     console.log(alumno);
    // });

    //Crear nuevas asignaturas
    // functions.newAsignatura(asignaturas);

    // const newNotas = functions.newNota(notasPrueba);

    // console.log(newNotas);

    //Buscar notas
    // functions.searchNota(1);

    //Consultar todas las notas
    functions.consultar().then((notas) => {
        console.log(notas);
    });
