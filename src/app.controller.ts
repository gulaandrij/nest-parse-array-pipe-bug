import { Body, Controller, ParseArrayPipe, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { BodyDto } from './body.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Post()
  @ApiBody({ type: [BodyDto], isArray: true })
  getHello(@Body(new ParseArrayPipe({
    items: BodyDto,
    whitelist: true,
    stopAtFirstError: false,
  })) data: BodyDto[]): string {
    return this.appService.getHello();
  }
}
