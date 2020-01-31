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
const common_1 = require("@nestjs/common");
const heroes_service_1 = require("./heroes.service");
const create_hero_dto_1 = require("./dto/create-hero.dto");
let HeroesController = class HeroesController {
    constructor(heroService) {
        this.heroService = heroService;
    }
    async addHero(createHeroDTO) {
        return this.heroService.addHero(createHeroDTO);
    }
    async getHeroes() {
        return this.heroService.getHeroes();
    }
    async getHero(id) {
        return this.heroService.getHero(id);
    }
    async updateHero(id, createHeroDTO) {
        return this.heroService.updateHero(id, createHeroDTO);
    }
    async deleteHero(id, createHeroDTO) {
        return this.heroService.deleteHero(id, createHeroDTO);
    }
};
__decorate([
    common_1.Post('/api/SaveUser'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_hero_dto_1.CreateHeroDTO]),
    __metadata("design:returntype", Promise)
], HeroesController.prototype, "addHero", null);
__decorate([
    common_1.Get('api/getUser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HeroesController.prototype, "getHeroes", null);
__decorate([
    common_1.Get('api/getUser/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HeroesController.prototype, "getHero", null);
__decorate([
    common_1.Put('/api/updateUser/:id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_hero_dto_1.CreateHeroDTO]),
    __metadata("design:returntype", Promise)
], HeroesController.prototype, "updateHero", null);
__decorate([
    common_1.Delete('/api/deleteUser/:id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_hero_dto_1.CreateHeroDTO]),
    __metadata("design:returntype", Promise)
], HeroesController.prototype, "deleteHero", null);
HeroesController = __decorate([
    common_1.Controller('heroes'),
    __metadata("design:paramtypes", [heroes_service_1.HeroesService])
], HeroesController);
exports.HeroesController = HeroesController;
//# sourceMappingURL=heroes.controller.js.map