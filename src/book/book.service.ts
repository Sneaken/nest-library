import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entity/Book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  async findOne(id: string): Promise<Book> {
    return await this.bookRepository.findOne(id);
  }

  async create(): Promise<string> {
    const book = new Book();
    book.name = 'novak';
    book.age = 18;

    return this.bookRepository
      .save(book)
      .then(res => {
        return 'create book ...done';
      })
      .catch(err => {
        return err;
      });
  }
}
