export class CreateFollowDto {
    private constructor(
        public readonly id: string,
        public readonly id_carrera: string,    // ID de la carrera
        public readonly tiempo_llegada: number,
        public readonly orden_de_llegada: number,
        public readonly pulso_inicial: number,
        public readonly pulso_final: number
    ) {}

    static create(props: { [key: string]: any }): [string?, CreateFollowDto?] {
        const {
            id,
            id_carrera,
            tiempo_llegada,
            orden_de_llegada,
            pulso_inicial,
            pulso_final
        } = props;

        if (!id_carrera) return ['Id_carrera property is required', undefined];
        if (typeof tiempo_llegada !== 'number') return ['Tiempo_llegada property is required and must be a number', undefined];
        if (typeof orden_de_llegada !== 'number') return ['Orden_de_llegada property is required and must be a number', undefined];
        if (typeof pulso_inicial !== 'number') return ['Pulso_inicial property is required and must be a number', undefined];
        if (typeof pulso_final !== 'number') return ['Pulso_final property is required and must be a number', undefined];

        return [undefined, new CreateFollowDto(id, id_carrera, tiempo_llegada, orden_de_llegada, pulso_inicial, pulso_final)];
    }
}
