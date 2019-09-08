import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
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
  @Post('create')
  async create(@Body() body): Promise<Book> {
    return this.bookService.create(body.id);
  }
}
