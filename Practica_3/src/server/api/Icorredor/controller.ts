import { Request, Response } from 'express';
import Model from './model';


export const create = async (req: Request, res: Response): Promise<void> => {
    try {
        const corredor = new Model(req.body);
        await corredor.save();
        res.status(201).json(corredor);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const get = async (req: Request, res: Response): Promise<void> => {
    try {
        const corredor = await Model.find({});
        res.json(corredor);
    } catch (err) {
        res.status(500).send(err);
    }
};


export const getById = async (req: Request, res: Response): Promise<void> => {
    try {
        const corredor = await Model.findById(req.params.id);
        if (!corredor) {
            res.status(404).send('No se encontró la asignatura');
            return;
        }
        res.json(corredor);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const update = async (req: Request, res: Response): Promise<void> => {
    try {
        const corredor = await Model.findById(req.params.id);
        if (!corredor) {
            res.status(404).send('No se encontró la asignatura');
            return;
        }
        Object.assign(corredor, req.body);
        await corredor.save();
        res.json(corredor);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const remove = async (req: Request, res: Response): Promise<void> => {
    try {
        const corredor = await Model.findById(req.params.id);
        if (!corredor) {
            res.status(404).send('No se encontró la asignatura');
            return;
        }
        await corredor.updateOne({ estado: 'Eliminado' });
        res.json(corredor);
    } catch (err) {
        res.status(500).send(err);
    }
};