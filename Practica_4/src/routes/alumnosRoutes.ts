import { Router } from 'express';
import { getAlumnos } from '../controllers/alumnosController';

const router = Router();

router.get('/', getAlumnos);

export default router;