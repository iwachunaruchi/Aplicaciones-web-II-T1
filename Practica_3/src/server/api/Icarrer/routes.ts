import {Router} from 'express';
import * as controller from './controller';

const router = Router();

router.route('/')
    .get(controller.get);
    .post(controller.create);

router.route('/:id')
    .get(controller.getByid)
    .put(controller.update)
    
export default router;
