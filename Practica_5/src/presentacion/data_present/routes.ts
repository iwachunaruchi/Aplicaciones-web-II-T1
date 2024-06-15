import { Router } from "express";
import { CarreraController } from "./controller.ddd";
import { CarreraDatasourceImpl } from "../../infraestructure/datasource/carreara.datasource.impl";
import { CarreraRepositoryImpl } from "../../infraestructure/repositories/carrera.repository.impl";

export class CarreraRoutes{
    static get routes(): Router{
        const router = Router();
        const carreraDatasource = new CarreraDatasourceImpl();
        const carreraRepository = new CarreraRepositoryImpl( carreraDatasource );
        const carreraController = new CarreraController( carreraRepository );

        router.post( '/carrera', carreraController.createCarrera );
        router.put( '/carrera/:id', carreraController.updateCarrera );

        return router;
    }
}