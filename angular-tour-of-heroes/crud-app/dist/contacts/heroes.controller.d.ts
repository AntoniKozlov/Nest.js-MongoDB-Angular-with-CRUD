import { HeroesService } from './heroes.service';
import { CreateHeroDTO } from './dto/create-hero.dto';
import { allHeroes } from "./interfaces/hero.interface";
export declare class HeroesController {
    private heroService;
    constructor(heroService: HeroesService);
    addHero(createHeroDTO: CreateHeroDTO): Promise<allHeroes>;
    getHeroes(): Promise<allHeroes[]>;
    getHero(id: string): Promise<allHeroes>;
    updateHero(id: string, createHeroDTO: CreateHeroDTO): Promise<allHeroes>;
    deleteHero(id: string, createHeroDTO: CreateHeroDTO): Promise<allHeroes>;
}
