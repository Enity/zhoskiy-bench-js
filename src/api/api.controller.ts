import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bear } from './bear.entity';
import { Repository } from 'typeorm';

@Controller('api')
export class ApiController {
  constructor(
    @InjectRepository(Bear)
    private bears: Repository<Bear>,
  ) {}

  @Get('plaintext')
  plainText() {
    return 'ok lets go';
  }

  @Get('read-data')
  async readData() {
    const res = await this.bears.find();
    return res;
  }

  @Post('create-data')
  async createData(@Body() body: Bear) {
    await this.bears.save(body);
  }
}
