import { Router } from "express";
import { CarreraRoutes } from "./data_present/routes";

export class AppRoutes{
    static get routes(): Router{
        const router = Router();
        router.use( '/api', CarreraRoutes.routes );
        return router;
    }
}