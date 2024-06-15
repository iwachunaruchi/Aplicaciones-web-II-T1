export class UpdateFollowDto {
    private constructor(
        public readonly id?: string,
        public readonly id_carrera?: string,    // ID de la carrera
        public readonly tiempo_llegada?: number,
        public readonly orden_de_llegada?: number,
        public readonly pulso_inicial?: number,
        public readonly pulso_final?: number
    ) {}

    static update(props: { [key: string]: any }): [string?, UpdateFollowDto?] {
        const {
            id,
            id_carrera,
            tiempo_llegada,
            orden_de_llegada,
            pulso_inicial,
            pulso_final
        } = props;

        if (!id) return ['ID is required for updating follow', undefined];

        // Validation if needed
        // For example, if tiempo_llegada is provided, ensure it's a number
        if (tiempo_llegada !== undefined && typeof tiempo_llegada !== 'number') {
            return ['Tiempo_llegada must be a number', undefined];
        }
        if (orden_de_llegada !== undefined && typeof orden_de_llegada !== 'number') {
            return ['Orden_de_llegada must be a number', undefined];
        }
        if (pulso_inicial !== undefined && typeof pulso_inicial !== 'number') {
            return ['Pulso_inicial must be a number', undefined];
        }
        if (pulso_final !== undefined && typeof pulso_final !== 'number') {
            return ['Pulso_final must be a number', undefined];
        }

        return [undefined, new UpdateFollowDto(id, id_carrera, tiempo_llegada, orden_de_llegada, pulso_inicial, pulso_final)];
    }
}
