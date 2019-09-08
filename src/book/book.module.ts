import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { Book } from './entity/Book.entity';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([Book])],
  providers: [BookService],
  controllers: [BookController],
})
export class BookModule {}
