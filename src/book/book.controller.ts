import { Controller, Get, Param, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './entity/Book.entity';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  /**
   * 通过id查找
   * @param query
   */
  @Get('findOne')
  async findOne(@Query() query): Promise<Book> {
    return this.bookService.findOne(query.id);
  }

  /**
   * 新建图书
   */
  @Get('create')
  async create(): Promise<string> {
    return this.bookService.create();
  }
}
