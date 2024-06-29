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
exports.FollowResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const follow_service_1 = require("./follow.service");
const follow_entity_1 = require("./entities/follow.entity");
const create_follow_input_1 = require("./dto/create-follow.input");
let FollowResolver = class FollowResolver {
    constructor(followService) {
        this.followService = followService;
    }
    createFollow(createFollowDto) {
        return this.followService.create(createFollowDto);
    }
    findAll() {
        return this.followService.findAll();
    }
    findOne(id) {
        return this.followService.findOne(id);
    }
    removeFollow(id) {
        return this.followService.remove(id);
    }
};
exports.FollowResolver = FollowResolver;
__decorate([
    (0, graphql_1.Mutation)(() => follow_entity_1.Follow),
    __param(0, (0, graphql_1.Args)('createFollowDto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_follow_input_1.CreateFollowDto]),
    __metadata("design:returntype", void 0)
], FollowResolver.prototype, "createFollow", null);
__decorate([
    (0, graphql_1.Query)(() => [follow_entity_1.Follow], { name: 'follows' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FollowResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => follow_entity_1.Follow, { name: 'follow' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FollowResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => follow_entity_1.Follow),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FollowResolver.prototype, "removeFollow", null);
exports.FollowResolver = FollowResolver = __decorate([
    (0, graphql_1.Resolver)(() => follow_entity_1.Follow),
    __metadata("design:paramtypes", [follow_service_1.FollowService])
], FollowResolver);
//# sourceMappingURL=follow.resolver.js.map