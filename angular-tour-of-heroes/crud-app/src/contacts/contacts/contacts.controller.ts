import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateHeroDTO } from './dto/create-hero.dto';
import {allHeroes} from "./interfaces/hero.interface";

@Controller('contacts')
export class ContactsController {
  constructor(private heroService: ContactsService) { }


  /*@Get()
  index(): string {
    return "This action will return contacts";
  }*/
  /*
  @Post()
  async addHero(@Body() createCustomerDTO: CreateHeroDTO) {
    return this.heroService.addHero(createCustomerDTO);
  }

  @Get()
  async getAllHero(): Promise<allHeroes[]> {
    return this.heroService.getAllHero();
  }

  @Get(':id')
  async getHero(@Param('id') id: string) {
    return this.heroService.getHero(id);
  }

  @Put(':id')
  async updateHero(@Param('id') id: string, @Body() createCustomerDTO: CreateHeroDTO) {
    return this.heroService.updateHero(id, createCustomerDTO);
  }

  @Delete(':id')
  async deleteHero(@Param('id') id: string, @Body() createCustomerDTO: CreateHeroDTO) {
    return this.heroService.deleteHero(id, createCustomerDTO);
  }
*/



  // Retrieve customers list
  @Get('api/getUser')
  async getHeroes(@Res() res) {
    const heroes = await this.heroService.getHeroes();
    return heroes;//res.status(HttpStatus.OK).json(heroes);
  }

  // Fetch a particular customer using ID
  @Get('api/getUser/:_id')
  async getHero(@Res() res, @Param('_id') _id) {
    const hero = await this.heroService.getHero(_id);
    if (!hero) throw new NotFoundException('Customer does not exist!');
    return res.status(HttpStatus.OK).json(hero);

  }

  // add a customer
  @Post('/api/SaveUser')
  async addHero(@Res() res, @Body() createCustomerDTO: CreateHeroDTO) {
    const hero = await this.heroService.addHero(createCustomerDTO);
    return res.status(HttpStatus.OK).json({
      message: "Customer has been created successfully",
      hero
    })
  }

  // Update a customer's details
  @Put('/api/updateUser')
  async updateHero(@Res() res, @Query('_id') _id, @Body() createCustomerDTO: CreateHeroDTO) {
    const hero = await this.heroService.updateHero(_id, createCustomerDTO);
    if (!hero) throw new NotFoundException('Customer does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Customer has been successfully updated',
      hero
    });
  }

  // Delete a customer
  @Delete('/api/deleteUser')
  async deleteHero(@Res() res, @Query('_id') _id) {
    const hero = await this.heroService.deleteHero(_id);
    if (!hero) throw new NotFoundException('Customer does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'Customer has been deleted',
      hero
    })
  }


}
