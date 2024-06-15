export class UpdateCarreraDto{
    private constructor(
        public readonly id:string,
        public readonly name?:string,
        public readonly C_kilometers?:number,
        public readonly adiccional_details?:string,
        public readonly fecha?: string,
        public readonly hora?:string,
    ) {}
    get values(){
        return {
            id:this.id,
            name:this.name,
            C_kilometers:this.C_kilometers,
            adiccional_details:this.adiccional_details,
            fecha:this.fecha,
            hora:this.hora
        }
    }

    static create(props: { [key: string]: any }): [string?, UpdateCarreraDto?] {
        const { id, name, C_kilometers, adiccional_details, fecha, hora } = props;

        if (!name) return ['Nombre property is required', undefined];
        if (!C_kilometers) return ['C_kilometers property is required', undefined];
        if (!adiccional_details) return ['Adiccional details property is required', undefined];
        if (!fecha) return ['Fecha property is required', undefined];
        if (!hora) return ['Hora property is required', undefined];

        return [undefined, new UpdateCarreraDto(id, name, C_kilometers, adiccional_details, fecha, hora)];
    }
}