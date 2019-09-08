import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true, unique: true, comment: '豆瓣书本id' })
  // tslint:disable-next-line:variable-name
  _id?: string;
  @Column({ length: 512, comment: '书名' })
  title: string;
  @Column({ nullable: true, comment: '子标题' })
  subtitle?: string;
  @Column({ type: 'text', comment: '内容简介' })
  summary: string;
  @Column({ type: 'json', comment: '作者' })
  author: string;
  @Column({ type: 'text', comment: '作者简介' })
  authorIntro: string;
  @Column({ comment: '出版社' })
  publisher: string;
  @Column({ nullable: true, comment: '原作名' })
  altTitle?: string;
  @Column({ nullable: true, comment: '原标题' })
  originTitle?: string;
  @Column({ nullable: true, comment: '译者' })
  translator?: string;
  @Column({ comment: '出版日期' })
  pubDate: string;
  @Column({ type: 'int', nullable: true, comment: '页数' })
  pages?: number;
  @Column({ type: 'json', nullable: true, comment: '标签' })
  tags: string;
  @Column({ type: 'text', comment: '目录' })
  catalog: string;
  @Column({ nullable: true, comment: '封面地址' })
  image?: string;
  @Column({ nullable: true, comment: '装帧' })
  binding?: string;
  @Column({ nullable: true, length: 10, comment: '10位isbn' })
  isbn10?: string;
  @Column({ length: 13, comment: '13位isbn' })
  isbn13: string;
  @Column({
    type: 'float',
    nullable: true,
    default: 0.0,
    precision: 5,
    scale: 2,
    comment: '定价',
  })
  price?: number;
  @Column({ type: 'json', comment: '评分' })
  rating: { average: string; min: number; max: number; numRaters: number };
  @Column({ type: 'json', comment: '图集' })
  images: { small: string; large: string; medium: string };
}
