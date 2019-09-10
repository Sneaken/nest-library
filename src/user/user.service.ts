import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiException } from '../common/exceptions/api.exception';
import { ApiErrorCode } from '../common/enums/api-error-code.enum';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  findOne(id: any) {
    return undefined;
  }
  async create(body: any): Promise<User> {
    try {
      const user = new User();
      user.username = body.username;
      user.password = body.password;
      user.realName = body.realName;
      user.createTime = new Date();
      user.competence = '1';
      await this.userRepository.save(user);
      return;
    } catch (err) {
      throw new ApiException(
        err,
        ApiErrorCode.USER_ID_INVALID,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
