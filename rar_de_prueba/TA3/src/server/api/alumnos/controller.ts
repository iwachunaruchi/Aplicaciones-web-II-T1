import { Request, Response } from 'express';
import Model from './model';

export const create = async (req: Request, res: Response): Promise<void> => {
    try {
        const alumno = new Model(req.body);
        await alumno.save();
        res.status(201).json(alumno);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const get = async (req: Request, res: Response): Promise<void> => {
    try {
        const alumnos = await Model.find({});
        res.json(alumnos);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const getById = async (req: Request, res: Response): Promise<void> => {
    try {
        const alumno = await Model.findById(req.params.id);
        if (!alumno) {
            res.status(404).send('No se encontró el alumno');
            return;
        }
        res.json(alumno);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const update = async (req: Request, res: Response): Promise<void> => {
    try {
        const alumno = await Model.findById(req.params.id);
        if (!alumno) {
            res.status(404).send('No se encontró el alumno');
            return;
        }
        Object.assign(alumno, req.body);
        await alumno.save();
        res.json(alumno);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const remove = async (req: Request, res: Response): Promise<void> => {
    try {
        const alumno = await Model.findById(req.params.id);
        if (!alumno) {
            res.status(404).send('No se encontró el alumno');
            return;
        }
        await alumno.updateOne({ estado: 'Eliminado' });
        res.json(alumno);
    } catch (err) {
        res.status(500).send(err);
    }
};
