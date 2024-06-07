import { Request, Response } from "express";
import { Corredor } from "../models/models";

export const createCorredor = async(req:Request, res:Response)=>{
    try {
        const corredor = new Corredor(req.body);
        await corredor.save();
        res.status(200).send(corredor);

    } catch (error) {
        res.status(400).send(error);

    }
}
export const getAllCorredores = async (req:Request, res:Response)=>{
    try {
        const corredores = await Corredor.find();
        res.status(200).send(corredores);
    } catch (error) {
        res.status(500).send(error);

    }
}