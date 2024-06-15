import { Request,Response } from "express";
import { CreateCarreraDto,UpdateCarreraDto } from "../../domain";
import { CarreraRepository } from "../../domain";

export class CarreraController{
    constructor(
        private readonly carrerarepository: CarreraRepository
    ){}
    public createCarrera = async ( req: Request, res: Response ) => {
        const [ error, createCiudadanoDto ] = CreateCarreraDto.create( req.body );
        if ( error ) return res.status( 400 ).json( { error } );
    
        const todo = await this.carrerarepository.create( createCiudadanoDto! );
        res.json( todo );
    };

    public updateCarrera = async ( req: Request, res: Response ) => {
        const id = +req.params.id;
        const [ error, updateCiudadanoDto ] = UpdateCarreraDto.create( { ...req.body, id } );
        if ( error ) return res.status( 400 ).json( { error } );
    
        const updatedCiudadano = await this.carrerarepository.update( updateCiudadanoDto! );
        return res.json( updatedCiudadano );
    
    };
}