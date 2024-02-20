import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board, BoardStatus } from './boards.model';

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

  @Get('/get')
  getBoards() : Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post('/write')
  postBoards(@Body() createBoardDto : CreateBoardDto){
    return this.boardsService.createBoard(createBoardDto);
  } 

  @Get('/:id')
  getByTitle(@Param('id') id : string){
    return this.boardsService.getBoardsByTitle(id);
  }

  @Get('/search')
  getById2(@Query('id') id : string){
    return this.boardsService.getBoardsByTitle(id);
  }

  @Delete('/:id')
  deleteById(@Param('id') id : string){
    return this.boardsService.deleteBoardById(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(@Param('id') id : string, @Body('status') status : BoardStatus){
    return this.boardsService.updateBoardById(id, status);
  }
}
