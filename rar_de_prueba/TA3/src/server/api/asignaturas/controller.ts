import { Request, Response } from 'express';
import Model from './model';

export const create = async (req: Request, res: Response): Promise<void> => {
    try {
        const asignatura = new Model(req.body);
        await asignatura.save();
        res.status(201).json(asignatura);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const get = async (req: Request, res: Response): Promise<void> => {
    try {
        const asignaturas = await Model.find({});
        res.json(asignaturas);
    } catch (err) {
        res.status(500).send(err);
    }
};


export const getById = async (req: Request, res: Response): Promise<void> => {
    try {
        const asignatura = await Model.findById(req.params.id);
        if (!asignatura) {
            res.status(404).send('No se encontró la asignatura');
            return;
        }
        res.json(asignatura);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const update = async (req: Request, res: Response): Promise<void> => {
    try {
        const asignatura = await Model.findById(req.params.id);
        if (!asignatura) {
            res.status(404).send('No se encontró la asignatura');
            return;
        }
        Object.assign(asignatura, req.body);
        await asignatura.save();
        res.json(asignatura);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const remove = async (req: Request, res: Response): Promise<void> => {
    try {
        const asignatura = await Model.findById(req.params.id);
        if (!asignatura) {
            res.status(404).send('No se encontró la asignatura');
            return;
        }
        await asignatura.updateOne({ estado: 'Eliminado' });
        res.json(asignatura);
    } catch (err) {
        res.status(500).send(err);
    }
};