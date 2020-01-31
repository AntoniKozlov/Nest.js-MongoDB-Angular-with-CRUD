import { Module } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { HeroesController } from './heroes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TOHSchema } from './hero.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'allHeroes', schema: TOHSchema }])],
  providers: [HeroesService],
  controllers: [HeroesController]
})
export class HeroesModule {}
