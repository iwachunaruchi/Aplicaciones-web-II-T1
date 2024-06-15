export class CreateCorredorDto{
    private constructor(
        public readonly id:string,
        public readonly name:string,
        public readonly peso:number,
        public readonly altura:string,
        public readonly edad: number
    ){}

    static create(props:({[key:string]:any})):[string?,CreateCorredorDto?]{
        const {id,name,peso,altulra,edad} = props;

        if(!name) return ['Nombre property is required',undefined];
        if(!peso) return ['Peso property is required',undefined];
        if(!altulra) return ['Altura property is required',undefined];
        if(!edad) return ['Edad property is required',undefined];

        return [undefined,new CreateCorredorDto(id,name,peso,altulra,edad)];
    }
}