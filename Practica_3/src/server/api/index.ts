import {Router, Request, Response, json } from 'express';
import carrera from './Icarrer/routes';
import corredores from './Icorredor/routes';
import follow from './Ifollow/routes';
import entity from './Ientity/routes';

const router = Router();

router.use(json());
router.get('/', (req: Request, res: Response)=>{
    res.send('hola api');
})

router.use('/carrera', carrera);
router.use('/corredores', corredores);
router.use('/follow', follow);
router.use('/entity', entity);

export default router;