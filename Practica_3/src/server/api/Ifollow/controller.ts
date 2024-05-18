import { Request, Response } from 'express';
import Model from './model';


export const create = async (req: Request, res: Response): Promise<void> => {
    try {
        const follow = new Model(req.body);
        await follow.save();
        res.status(201).json(follow);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const get = async (req: Request, res: Response): Promise<void> => {
    try {
        const follow = await Model.find({});
        res.json(follow);
    } catch (err) {
        res.status(500).send(err);
    }
};


export const getById = async (req: Request, res: Response): Promise<void> => {
    try {
        const follow = await Model.findById(req.params.id);
        if (!follow) {
            res.status(404).send('No se encontró la asignatura');
            return;
        }
        res.json(follow);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const update = async (req: Request, res: Response): Promise<void> => {
    try {
        const follow = await Model.findById(req.params.id);
        if (!follow) {
            res.status(404).send('No se encontró la asignatura');
            return;
        }
        Object.assign(follow, req.body);
        await follow.save();
        res.json(follow);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const remove = async (req: Request, res: Response): Promise<void> => {
    try {
        const follow = await Model.findById(req.params.id);
        if (!follow) {
            res.status(404).send('No se encontró la asignatura');
            return;
        }
        await follow.updateOne({ estado: 'Eliminado' });
        res.json(follow);
    } catch (err) {
        res.status(500).send(err);
    }
};