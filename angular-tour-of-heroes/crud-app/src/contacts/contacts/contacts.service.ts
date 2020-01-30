import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TOHSchema } from '../contact.entity';
import { allHeroes } from './interfaces/hero.interface';
import { CreateHeroDTO } from './dto/create-hero.dto';
@Injectable()
export class ContactsService {
  constructor(
    @InjectModel('allHeroes') private readonly TOHModel: Model<allHeroes>) { }
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

  // fetch all customers
  async getHeroes(): Promise<allHeroes[]> {
    const heroes = await
      this.TOHModel.find().exec();
    return heroes;
  }

  // Get a single customer
  async getHero(_id): Promise<allHeroes> {
    if (_id.match(/^[0-9a-fA-F]{24}$/)) {
      // Yes, it's a valid ObjectId, proceed with `findById` call.
      const heroes = await this.TOHModel.findById(_id).exec();
      return heroes;
    }

  }

  // post a single customer
  async addHero(createHeroDTO: CreateHeroDTO): Promise<allHeroes> {
    const newHero = await
      new this.TOHModel(createHeroDTO);
    return newHero.save();
  }

  // Edit customer details
  async updateHero(_id, createHeroDTO: CreateHeroDTO): Promise<allHeroes> {
    if (_id.match(/^[0-9a-fA-F]{24}$/)) {
      const updatedHero = await this.TOHModel
        .findByIdAndUpdate(_id, createHeroDTO, {new: true});
      return updatedHero;
    }
  }

  // Delete a customer
  async deleteHero(_id): Promise<any> {
    if (_id.match(/^[0-9a-fA-F]{24}$/)) {
      const deleteHero = await this.TOHModel.findByIdAndRemove(_id);
      return deleteHero;
    }
  }
}
