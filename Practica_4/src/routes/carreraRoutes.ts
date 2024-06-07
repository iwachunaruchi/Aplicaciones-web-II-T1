import { Router } from "express";
import { createCarrera,getAllCarreras } from "../controllers/carreraController";

const router = Router();

router.post('/',createCarrera);
router.get('/',getAllCarreras);

export default router