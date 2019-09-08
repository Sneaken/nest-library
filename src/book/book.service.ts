import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entity/Book.entity';
import axios from 'axios';
import { ApiException } from '../common/exceptions/api.exception';
import { ApiErrorCode } from '../common/enums/api-error-code.enum';

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

  async create(id: string): Promise<Book> {
    try {
      const bookInfo = await (await axios.get(
        `https://douban.uieee.com/v2/book/${id}`,
      )).data;
      const book: Book = new Book();
      book._id = bookInfo.id;
      book.rating = bookInfo.rating;
      book.subtitle = bookInfo.subtitle;
      book.author = bookInfo.author;
      book.pubDate = bookInfo.pubdate;
      book.tags = JSON.stringify(bookInfo.tags);
      book.originTitle = bookInfo.origin_title;
      book.image = bookInfo.image;
      book.binding = bookInfo.binding;
      book.translator = bookInfo.translator.toString();
      book.catalog = bookInfo.catalog;
      book.pages = parseInt(bookInfo.pages, 10) || null;
      book.images = bookInfo.images;
      book.publisher = bookInfo.publisher;
      book.isbn10 = bookInfo.isbn10;
      book.isbn13 = bookInfo.isbn13;
      book.title = bookInfo.title;
      book.altTitle = bookInfo.alt_title;
      book.authorIntro = bookInfo.author_intro;
      book.summary = bookInfo.summary;
      book.price =
        parseFloat(bookInfo.price) ||
        (bookInfo.price.match(/\d+\.?\d+/) &&
          parseFloat(bookInfo.price.match(/\d+\.?\d+/)[0]));
      await this.bookRepository.save(book);
      return;
    } catch (err) {
      console.log(err);
      throw new ApiException(
        err,
        ApiErrorCode.USER_ID_INVALID,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
