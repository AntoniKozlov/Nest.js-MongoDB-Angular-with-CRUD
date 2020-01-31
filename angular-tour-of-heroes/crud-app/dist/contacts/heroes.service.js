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
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let HeroesService = class HeroesService {
    constructor(TOHModel) {
        this.TOHModel = TOHModel;
    }
    async getHeroes() {
        const heroes = await this.TOHModel.find().exec();
        return heroes;
    }
    async getHero(id) {
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            const heroes = await this.TOHModel.findById(id).exec();
            return heroes;
        }
    }
    async addHero(createHeroDTO) {
        const newHero = await new this.TOHModel(createHeroDTO);
        return newHero.save();
    }
    async updateHero(id, createHeroDTO) {
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            const updatedHero = await this.TOHModel
                .findByIdAndUpdate(id, createHeroDTO, { new: true });
            return updatedHero;
        }
    }
    async deleteHero(id, createHeroDTO) {
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            const deleteHero = await this.TOHModel.findByIdAndRemove(id);
            return deleteHero;
        }
    }
};
HeroesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('allHeroes')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], HeroesService);
exports.HeroesService = HeroesService;
//# sourceMappingURL=heroes.service.js.map