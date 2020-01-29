import { Module } from '@nestjs/common';
import { ContactsService } from './contacts/contacts.service';
import { ContactsController } from './contacts/contacts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TOHSchema } from './contact.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'allHeroes', schema: TOHSchema }])],
  providers: [ContactsService],
  controllers: [ContactsController]
})
export class ContactsModule {}
