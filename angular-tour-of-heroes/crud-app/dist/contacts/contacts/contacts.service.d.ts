import { Model } from 'mongoose';
import { allHeroes } from './interfaces/hero.interface';
import { CreateHeroDTO } from './dto/create-hero.dto';
export declare class ContactsService {
    private readonly TOHModel;
    constructor(TOHModel: Model<allHeroes>);
    getHeroes(): Promise<allHeroes[]>;
    getHero(_id: any): Promise<allHeroes>;
    addHero(createHeroDTO: CreateHeroDTO): Promise<allHeroes>;
    updateHero(_id: any, createHeroDTO: CreateHeroDTO): Promise<allHeroes>;
    deleteHero(_id: any): Promise<any>;
}
