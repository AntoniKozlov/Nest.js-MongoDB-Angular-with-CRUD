import { ContactsService } from './contacts.service';
import { CreateHeroDTO } from './dto/create-hero.dto';
import { allHeroes } from "./interfaces/hero.interface";
export declare class ContactsController {
    private heroService;
    constructor(heroService: ContactsService);
    addHero(createCustomerDTO: CreateHeroDTO): Promise<allHeroes>;
    getHeroes(): Promise<allHeroes[]>;
    getHero(id: string): Promise<allHeroes>;
    updateHero(id: string, createCustomerDTO: CreateHeroDTO): Promise<allHeroes>;
    deleteHero(id: string, createCustomerDTO: CreateHeroDTO): Promise<allHeroes>;
}
