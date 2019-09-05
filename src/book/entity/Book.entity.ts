import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;
  //
  // @Column('text')
  // description: string;
  //
  // @Column()
  // filename: string;

  @Column('int')
  age: number;
}
