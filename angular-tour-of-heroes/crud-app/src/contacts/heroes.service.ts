import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TOHSchema } from './hero.entity';
import { allHeroes } from './interfaces/hero.interface';
import { CreateHeroDTO } from './dto/create-hero.dto';
@Injectable()
export class HeroesService {
  constructor(
    @InjectModel('allHeroes') private readonly TOHModel: Model<allHeroes>) { }

  // fetch all heroes
  async getHeroes(): Promise<allHeroes[]> {
    const heroes = await
      this.TOHModel.find().exec();
    return heroes;
  }

  // Get a single hero
  async getHero(id): Promise<allHeroes> {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      // Yes, it's a valid ObjectId, proceed with `findById` call.
      const heroes = await this.TOHModel.findById(id).exec();
      return heroes;
    }

  }

  // post a single hero
  async addHero(createHeroDTO: CreateHeroDTO): Promise<allHeroes> {
    const newHero = await
      new this.TOHModel(createHeroDTO);
    return newHero.save();
  }

  // Edit hero details
  async updateHero(id, createHeroDTO: CreateHeroDTO): Promise<allHeroes> {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      const updatedHero = await this.TOHModel
        .findByIdAndUpdate(id, createHeroDTO, {new: true});
      return updatedHero;
    }
  }

  // Delete a hero
  async deleteHero(id, createHeroDTO: CreateHeroDTO): Promise<allHeroes> {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      const deleteHero = await this.TOHModel.findByIdAndRemove(id);
      return deleteHero;
    }
  }
  /*
  async create(createHeroDto: CreateHeroDto): Promise<allHeroes> {
    const createdHero = new this.TOHModel(createHeroDto);
    return createdHero.save();
  }

  async findAll(): Promise<allHeroes[]> {
    return this.TOHModel.find().exec();
  }

  async update(updateHeroDto: CreateHeroDto): Promise<allHeroes> {
    return await this.TOHModel.update(updateHeroDto.id, updateHeroDto);
  }

  async delete(id): Promise<allHeroes> {
    return await this.TOHModel.delete(id);
  }
  */

}
