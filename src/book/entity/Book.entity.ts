import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number; // 书本id
  @Column({ length: 120 })
  title: string; // 书名
  @Column({ type: 'text', length: 2048 })
  summary: string; // 内容简介
  @Column({ type: 'json' })
  author: string; // 作者
  @Column({ type: 'text', length: 2048 })
  authorIntro: string; // 作者简介
  @Column()
  publisher: string; // 出版社
  @Column()
  altTitle: string; // 原作名
  @Column()
  originTitle: string; // 原标题
  @Column()
  translator?: string; // 译者
  @Column()
  pubDate: string; // 出版日期
  @Column('int')
  pages: number; // 页数
  @Column('json')
  tags: string; // 标签
  @Column()
  image: string; // 封面地址
  @Column()
  binding: string; // 装帧
  @Column({ length: 10 })
  isbn10: string; // 10位isbn
  @Column({ length: 13 })
  isbn13: string; // 13位isbn
  @Column({ type: 'float', length: 5 })
  price: number; // 定价
  @Column('json')
  rating: string; // 评分
}
