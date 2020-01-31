import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { CreateHeroDTO } from './dto/create-hero.dto';
import { allHeroes } from "./interfaces/hero.interface";

@Controller('heroes')
export class HeroesController {
  constructor(private heroService: HeroesService) { }

  @Post('/api/SaveUser')
  async addHero(@Body() createHeroDTO: CreateHeroDTO) {
    return this.heroService.addHero(createHeroDTO);
  }

  @Get('api/getUser')
  async getHeroes(): Promise<allHeroes[]> {
    return this.heroService.getHeroes();
  }

  @Get('api/getUser/:id')
  async getHero(@Param('id') id: string) {
    return this.heroService.getHero(id);
  }

  @Put('/api/updateUser/:id')
  async updateHero(@Param('id') id: string, @Body() createHeroDTO: CreateHeroDTO) {
    return this.heroService.updateHero(id, createHeroDTO);
  }

  @Delete('/api/deleteUser/:id')
  async deleteHero(@Param('id') id: string, @Body() createHeroDTO: CreateHeroDTO) {
    return this.heroService.deleteHero(id, createHeroDTO);
  }

  /*@Get()
   index(): string {
     return "This action will return heroes";
   }*/

/*
  // Retrieve heroes list
  @Get('api/getUser')
  async getHeroes(@Res() res) {
    const heroes = await this.heroService.getHeroes();
    return heroes;//res.status(HttpStatus.OK).json(heroes);
  }

  // Fetch a particular hero using ID
  @Get('api/getUser/:_id')
  async getHero(@Res() res, @Param('_id') _id) {
    const hero = await this.heroService.getHero(_id);
    if (!hero) throw new NotFoundException('Hero does not exist!');
    return res.status(HttpStatus.OK).json(hero);

  }

  // add a hero
  @Post('/api/SaveUser')
  async addHero(@Res() res, @Body() createHeroDTO: CreateHeroDTO) {
    const hero = await this.heroService.addHero(createHeroDTO);
    return res.status(HttpStatus.OK).json({
      message: "Hero has been created successfully",
      hero
    })
  }

  // Update a hero's details
  @Put('/api/updateUser')
  async updateHero(@Res() res, @Query('_id') _id, @Body() createHeroDTO: CreateHeroDTO) {
    const hero = await this.heroService.updateHero(_id, createHeroDTO);
    if (!hero) throw new NotFoundException('Hero does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Hero has been successfully updated',
      hero
    });
  }

  // Delete a hero
  @Delete('/api/deleteUser')
  async deleteHero(@Res() res, @Query('_id') _id) {
    const hero = await this.heroService.deleteHero(_id);
    if (!hero) throw new NotFoundException('Hero does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'Hero has been deleted',
      hero
    })
  }*/


}
