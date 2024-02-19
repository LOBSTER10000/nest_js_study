import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('/boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get('/hello')
  findAll(){
    return this.boardsService.findAll();
  }

  @Get('/hello1/:id')
  findOne(@Param('id') id: number) {
  return this.boardsService.findOne(id);
  }

  @Get('/hello2')
  findTwo(@Query('id') id : number){
    return this.boardsService.queryOne(id);
  }

}
