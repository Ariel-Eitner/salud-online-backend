import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
  HttpStatus,
  HttpCode,
  Res,
} from '@nestjs/common';
import { UserInformationService } from './user_information.service';
import { Response } from 'express';
import { UserInformation } from './user_information.entity';

@Controller('user-information')
export class UserInformationController {
  constructor(
    private readonly userInformationService: UserInformationService,
  ) {}

  @Get()
  async findAll(): Promise<UserInformation[]> {
    return this.userInformationService.findAll();
  }

  @Post()
  async create(@Body() userInformationData: any, @Res() res: Response) {
    try {
      const newUserInformation =
        await this.userInformationService.create(userInformationData);
      res.status(HttpStatus.CREATED).json(newUserInformation);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: error.message });
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Res() res: Response) {
    try {
      const userInformation = await this.userInformationService.findOne(id);
      if (!userInformation) {
        throw new NotFoundException(`UserInformation with ID ${id} not found.`);
      }
      res.status(HttpStatus.OK).json(userInformation);
    } catch (error) {
      res.status(HttpStatus.NOT_FOUND).json({ message: error.message });
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateData: any,
    @Res() res: Response,
  ) {
    try {
      const updatedUserInformation = await this.userInformationService.update(
        id,
        updateData,
      );
      res.status(HttpStatus.OK).json(updatedUserInformation);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ message: error.message });
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: number, @Res() res: Response) {
    try {
      await this.userInformationService.delete(id);
      res.status(HttpStatus.NO_CONTENT).json({});
    } catch (error) {
      res.status(HttpStatus.NOT_FOUND).json({ message: error.message });
    }
  }
}
