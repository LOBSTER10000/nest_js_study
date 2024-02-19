import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('/boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get('/hello')
  findAll(){
    return this.boardsService.findAll();
  }

  @Get('/hello1')
  findOne(id: number) {
  var id = 700 ;
  return this.boardsService.findOne(id);
  }
}
