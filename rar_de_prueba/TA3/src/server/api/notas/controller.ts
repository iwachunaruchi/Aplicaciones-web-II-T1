import { Request, Response } from 'express';
import Model from './model';

export const create = async (req: Request, res: Response): Promise<void> => {
    try {
        const nota = new Model(req.body);
        await nota.save();
        res.status(201).json(nota);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const get = async (req: Request, res: Response): Promise<void> => {
    try {
        const notas = await Model.find({});
        res.json(notas);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const getById = async (req: Request, res: Response): Promise<void> => {
    try {
        const nota = await Model.findById(req.params.id);
        if (!nota) {
            res.status(404).send('No se encontró la nota');
            return;
        }
        res.json(nota);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const update = async (req: Request, res: Response): Promise<void> => {
    try {
        const nota = await Model.findById(req.params.id);
        if (!nota) {
            res.status(404).send('No se encontró la nota');
            return;
        }
        Object.assign(nota, req.body);
        await nota.save();
        res.json(nota);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const remove = async (req: Request, res: Response): Promise<void> => {
    try {
        const nota = await Model.findById(req.params.id);
        if (!nota) {
            res.status(404).send('No se encontró la nota');
            return;
        }
        await nota.updateOne({ estado: 'Eliminado' });
        res.json(nota);
    } catch (err) {
        res.status(500).send(err);
    }
};

