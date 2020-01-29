import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TOHSchema } from './contacts/contact.entity';

@Module({
  imports: [ContactsModule, MongooseModule.forRoot('mongodb+srv://BackTOH:qwe123@antoni-umfug.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
