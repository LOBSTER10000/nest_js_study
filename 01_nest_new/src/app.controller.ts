import { Body, Controller, Get, Post, Query, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/post/login')
  firstAjax(@Body() body : any){
    return {name : body.name, password : body.password}; 
  }

  @Get('/')
  getFirst(@Res() res, @Req() req){
    return res.render('boards/boards', {name : '안녕', gender : 'male'});
  }

}
