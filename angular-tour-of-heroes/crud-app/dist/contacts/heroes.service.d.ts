import { Model } from 'mongoose';
import { allHeroes } from './interfaces/hero.interface';
import { CreateHeroDTO } from './dto/create-hero.dto';
export declare class HeroesService {
    private readonly TOHModel;
    constructor(TOHModel: Model<allHeroes>);
    getHeroes(): Promise<allHeroes[]>;
    getHero(id: any): Promise<allHeroes>;
    addHero(createHeroDTO: CreateHeroDTO): Promise<allHeroes>;
    updateHero(id: any, createHeroDTO: CreateHeroDTO): Promise<allHeroes>;
    deleteHero(id: any, createHeroDTO: CreateHeroDTO): Promise<allHeroes>;
}
