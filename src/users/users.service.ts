import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto): UserDto {
    const response = new UserDto();
    const randomInteger = Math.floor(Math.random() * 1000);
    response.id = randomInteger;
    response.age = createUserDto.age;
    response.email = createUserDto.email;
    response.name = createUserDto.name;

    return response;
  }

  findAll(): UserDto[] {
    const response = new UserDto();
    const randomInteger = Math.floor(Math.random() * 1000);
    response.id = randomInteger;
    response.age = 24;
    response.email = '9ySjz@example.com';
    response.name = 'Kamil Myliwiec';

    return [response];
  }

  findOne(id: number): UserDto {
    const response = new UserDto();
    response.id = id;
    response.age = 24;
    response.email = '9ySjz@example.com';
    response.name = 'Kamil Myliwiec';
    return response;
  }

  update(id: number, updateUserDto: UpdateUserDto): UserDto {
    const response = new UserDto();
    const randomInteger = Math.floor(Math.random() * 1000);
    response.id = randomInteger;
    response.age = updateUserDto.age;
    response.email = updateUserDto.email;
    response.name = updateUserDto.name;
    return response;
  }

  remove(id: number): void {
    console.log('id :>> ', id);
    return;
  }
}
