import { Request,Response } from "express";
import { Carrera } from "../models/models";

export const createCarrera = async(req:Request, res:Response)=>{
    try {
        const carrera = new Carrera(req.body);
        await carrera.save();
        res.status(201).send(carrera);
    } catch (error) {
        res.status(400).send(error); 
    }
}
export const getAllCarreras = async (req:Request, res:Response)=>{
    try {
        const carreras = await Carrera.find();
        res.status(200).send(carreras);
    } catch (error) {
        res.status(500).send(error);
    }
}