import { ContactsService } from './contacts.service';
import { CreateHeroDTO } from './dto/create-hero.dto';
import { allHeroes } from "./interfaces/hero.interface";
export declare class ContactsController {
    private heroService;
    constructor(heroService: ContactsService);
    getHeroes(res: any): Promise<allHeroes[]>;
    getHero(res: any, _id: any): Promise<any>;
    addHero(res: any, createCustomerDTO: CreateHeroDTO): Promise<any>;
    updateHero(res: any, _id: any, createCustomerDTO: CreateHeroDTO): Promise<any>;
    deleteHero(res: any, _id: any): Promise<any>;
}
