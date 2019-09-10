import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 32, comment: '用户名' })
  username: string;
  @Column({ length: 64, comment: '密码' })
  password: string;
  @Column({ length: 64, comment: '真名' })
  realName: string;
  @Column({ type: 'char', length: 11, nullable: true, comment: '手机号' })
  phone?: string;
  @Column({ type: 'char', length: 18, nullable: true, comment: '身份证号' })
  idCard?: string;
  @Column({ length: 18, nullable: true, comment: '邮箱' })
  email?: string;
  @Column({ type: 'timestamp', comment: '创建时间' })
  createTime: Date;
  @Column({ type: 'json', comment: '权限' })
  competence: string;
}
