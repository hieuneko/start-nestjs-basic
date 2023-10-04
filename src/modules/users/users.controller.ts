import {Controller, Get, Post, Put,Body, Param, Delete, HttpStatus, HttpCode} from '@nestjs/common';
import {UsersService} from './users.service';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {ApiOperation, ApiTags} from '@nestjs/swagger';
import {User} from './entities/user.entity';

@ApiTags('Users')
@Controller('api/v1/users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Post()
    @ApiOperation({summary: 'Create new user'})
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createProfileDto: CreateUserDto): Promise<User> {
        return this.usersService.create(createProfileDto);
    }

    @Get()
    @ApiOperation({summary: 'Find all user'})
    @HttpCode(HttpStatus.OK)
    async findAll(): Promise<User[]> {
        return await this.usersService.findAll();
    }

    @Get(':id')
    @ApiOperation({summary: 'Find user by id'})
    @HttpCode(HttpStatus.OK)
    findOne(@Param('id') id: string): Promise<User> {
        return this.usersService.findOne(id);
    }

    @Put(':id')
    @ApiOperation({summary: 'Update user'})
    @HttpCode(HttpStatus.OK)
    update(
        @Param('id') id: string,
        @Body() updateUserDto: UpdateUserDto,
    ): Promise<User> {
        return this.usersService.update(id, updateUserDto);
    }

    @Delete(':id')
    @ApiOperation({summary: 'Delete user'})
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: string): Promise<void> {
        return this.usersService.softDelete(id);
    }
}