import { Router, Request, Response, json } from 'express';
import alumnos from './alumnos/routes';
import asignaturas from './asignaturas/routes';
import notas from './notas/routes';


const router = Router();
router.use(json());
router.get('/', (req: Request, res: Response) => {
    res.send('Hola a api');
});

router.use('/alumnos', alumnos);
router.use('/asignaturas', asignaturas);
router.use('/notas', notas);

export default router;
