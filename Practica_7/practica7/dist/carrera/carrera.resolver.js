"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarreraResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const carrera_service_1 = require("./carrera.service");
const carrera_entity_1 = require("./entities/carrera.entity");
const create_carrera_input_1 = require("./dto/create-carrera.input");
let CarreraResolver = class CarreraResolver {
    constructor(carreraService) {
        this.carreraService = carreraService;
    }
    createCarrera(createCarreraDto) {
        return this.carreraService.create(createCarreraDto);
    }
    findAll() {
        return this.carreraService.findAll();
    }
    findOne(id) {
        return this.carreraService.findOne(id);
    }
    removeCarrera(id) {
        return this.carreraService.remove(id);
    }
};
exports.CarreraResolver = CarreraResolver;
__decorate([
    (0, graphql_1.Mutation)(() => carrera_entity_1.Carrera),
    __param(0, (0, graphql_1.Args)('createCarreraDto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_carrera_input_1.CreateCarreraDto]),
    __metadata("design:returntype", void 0)
], CarreraResolver.prototype, "createCarrera", null);
__decorate([
    (0, graphql_1.Query)(() => [carrera_entity_1.Carrera], { name: 'carreras' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CarreraResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => carrera_entity_1.Carrera, { name: 'carrera' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarreraResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => carrera_entity_1.Carrera),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarreraResolver.prototype, "removeCarrera", null);
exports.CarreraResolver = CarreraResolver = __decorate([
    (0, graphql_1.Resolver)(() => carrera_entity_1.Carrera),
    __metadata("design:paramtypes", [carrera_service_1.CarreraService])
], CarreraResolver);
//# sourceMappingURL=carrera.resolver.js.map