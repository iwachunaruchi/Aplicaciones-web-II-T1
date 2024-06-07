import { Request, Response } from 'express';
import { Follow } from '../models/models';

export const createFollow = async (req: Request, res: Response) => {
  try {
    const follow = new Follow(req.body);
    await follow.save();
    res.status(201).send(follow);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getAllFollows = async (req: Request, res: Response) => {
  try {
    const follows = await Follow.find().populate('id_corridor').populate('id_carrer');
    res.status(200).send(follows);
  } catch (error) {
    res.status(500).send(error);
  }
};
