import { Controller, Get, Inject } from '@nestjs/common';
import { AppServiceInterface } from './app.service.interface';

@Controller('/')
export class AppController {
  constructor(
    @Inject('SERVICE') private readonly appService: AppServiceInterface,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
