import { Request, Response } from 'express';
import Model from './model';

export const create = async (req: Request, res:Response): Promise<void> =>{
    try {
        const carrera = new Model(req.body);
        await carrera.save();
        res.status(201).json(carrera);

    } catch (err) {
        res.status(500).send(err);

    }
}
export const get = async(req:Request, res:Response): Promise<void> =>{
    try {
        const carrera = await Model.find({});
        res.json(carrera)
    } catch (err) {
        res.status(500).send(err);
  
    }
}

export const getByid = async (req: Request, res: Response): Promise<void> =>{
    try {
        const carrera = await Model.findById(req.params.id);
        if (!carrera) {
            res.status(404).send('No se encontró el alumno');
            return;
        }
        res.json(carrera);
    } catch (err) {
        res.status(500).send(err);
    }
}
export const update = async (req: Request, res: Response): Promise<void> => {
    try {
        const carrera = await Model.findById(req.params.id);
        if (!carrera) {
            res.status(404).send('No se encontró el alumno');
            return;
        }
        Object.assign(carrera, req.body);
        await carrera.save();
        res.json(carrera);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const remove = async (req: Request, res: Response): Promise<void> => {
    try {
        const carrera = await Model.findById(req.params.id);
        if (!carrera) {
            res.status(404).send('No se encontró el alumno');
            return;
        }
        await carrera.updateOne({ estado: 'Eliminado' });
        res.json(carrera);
    } catch (err) {
        res.status(500).send(err);
    }
};