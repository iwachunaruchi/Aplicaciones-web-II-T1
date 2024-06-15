export class UpdateCorredorDto{
    private constructor(
        public readonly id:string,
        public readonly name?:string,
        public readonly peso?:number,
        public readonly altura?:string,
        public readonly edad?: string
    ){}

    static create(props:({[key:string]:any})):[string?,UpdateCorredorDto?]{
        const {id,name,peso,altulra,edad} = props;

        if(!name) return ['Nombre property is required',undefined];
        if(!peso) return ['Peso property is required',undefined];
        if(!altulra) return ['Altura property is required',undefined];
        if(!edad) return ['Edad property is required',undefined];

        return [undefined,new UpdateCorredorDto(id,name,peso,altulra,edad)];
    }
}