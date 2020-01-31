import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesModule } from './contacts/heroes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TOHSchema } from './contacts/hero.entity';

@Module({
  imports: [HeroesModule, MongooseModule.forRoot('mongodb+srv://BackTOH:qwe123@antoni-umfug.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
