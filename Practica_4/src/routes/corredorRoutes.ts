import { Router } from "express";
import { createCorredor,getAllCorredores } from "../controllers/corredorController";
const router = Router();
router.post('/',createCorredor);
router.get('/',getAllCorredores)

export default router