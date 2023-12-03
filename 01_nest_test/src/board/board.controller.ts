import { Controller, Post, Body, Get, UsePipes, ValidationPipe, Param } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create_board.dto';
import { Board } from 'src/entity/board.entity';

@Controller('board')
export class BoardController {
    constructor(private boardService : BoardService){}

    @Get('/')
    getBoard() : Promise<Board[]> {
        return this.boardService.getBoard();
    }

    @Post('/create')
    @UsePipes(ValidationPipe)
    createBoard(@Body() createBoardDto :CreateBoardDto) : Promise<Board> {
        return this.boardService.createBoard(createBoardDto);
    }

    @Get('/:id')
    getOne(@Param('id') id : number) : Promise<Board>{
        return this.boardService.getOne(id);
    } 
}
