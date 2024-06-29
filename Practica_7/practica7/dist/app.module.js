"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const apollo_1 = require("@nestjs/apollo");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const default_1 = require("@apollo/server/plugin/landingPage/default");
const path_1 = require("path");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const corredor_module_1 = require("./corredor/corredor.module");
const carrera_module_1 = require("./carrera/carrera.module");
const follow_module_1 = require("./follow/follow.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mongodb',
                url: process.env.DATABASE_URL,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                synchronize: true,
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                playground: false,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                plugins: [(0, default_1.ApolloServerPluginLandingPageLocalDefault)()],
            }),
            corredor_module_1.CorredorModule,
            carrera_module_1.CarreraModule,
            follow_module_1.FollowModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map