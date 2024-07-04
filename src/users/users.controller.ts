import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IdentifierUserParamsDto } from './dto/identifier-user-params.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param() queryParams: IdentifierUserParamsDto,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(+queryParams.id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param() queryParams: IdentifierUserParamsDto) {
    return this.usersService.remove(+queryParams.id);
  }
}
