export class CreateCarreraDto {

    private constructor(
        public readonly id:string,
        public readonly name:string,
        public readonly C_kilometers:number,
        public readonly adiccional_details:string,
        public readonly fecha: string,
        public readonly hora:string,
    ) {}
    
    static create(props: { [key: string]: any }): [string?, CreateCarreraDto?] {
        const { id, name, C_kilometers, adiccional_details, fecha, hora } = props;

        if (!name) return ['Nombre property is required', undefined];
        if (!C_kilometers) return ['C_kilometers property is required', undefined];
        if (!adiccional_details) return ['Adiccional details property is required', undefined];
        if (!fecha) return ['Fecha property is required', undefined];
        if (!hora) return ['Hora property is required', undefined];

        return [undefined, new CreateCarreraDto(id, name, C_kilometers, adiccional_details, fecha, hora)];
    }

}