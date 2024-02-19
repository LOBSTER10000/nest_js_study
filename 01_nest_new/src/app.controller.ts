import { Body, Controller, Get, Query, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

 
  @Get('/')
  getFirst(@Res() res, @Req() req){
    return res.render('boards/boards', {name : '안녕', gender : 'male'});
  }

  @Get('/get/login')
  firstAjax(@Query('name') name : any){
    return name; 
  }
}
