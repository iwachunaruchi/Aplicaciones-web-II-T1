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
exports.CorredorResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const corredor_service_1 = require("./corredor.service");
const corredor_entity_1 = require("./entities/corredor.entity");
const create_corredor_input_1 = require("./dto/create-corredor.input");
let CorredorResolver = class CorredorResolver {
    constructor(corredorService) {
        this.corredorService = corredorService;
    }
    createCorredor(createCorredorDto) {
        return this.corredorService.create(createCorredorDto);
    }
    findAll() {
        return this.corredorService.findAll();
    }
    findOne(id) {
        return this.corredorService.findOne(id);
    }
    removeCorredor(id) {
        return this.corredorService.remove(id);
    }
};
exports.CorredorResolver = CorredorResolver;
__decorate([
    (0, graphql_1.Mutation)(() => corredor_entity_1.Corredor),
    __param(0, (0, graphql_1.Args)('createCorredorDto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_corredor_input_1.CreateCorredorDto]),
    __metadata("design:returntype", void 0)
], CorredorResolver.prototype, "createCorredor", null);
__decorate([
    (0, graphql_1.Query)(() => [corredor_entity_1.Corredor], { name: 'corredores' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CorredorResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => corredor_entity_1.Corredor, { name: 'corredor' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CorredorResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => corredor_entity_1.Corredor),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CorredorResolver.prototype, "removeCorredor", null);
exports.CorredorResolver = CorredorResolver = __decorate([
    (0, graphql_1.Resolver)(() => corredor_entity_1.Corredor),
    __metadata("design:paramtypes", [corredor_service_1.CorredorService])
], CorredorResolver);
//# sourceMappingURL=corredor.resolver.js.map