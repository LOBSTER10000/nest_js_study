import { Body, Controller, Delete, Get, Param, Post, Patch, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Boards } from './models/boards.model';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
    boardService : BoardsService;

    constructor(boardService : BoardsService){
        this.boardService = boardService;
    }

    @Get('/')
    getAll() : Boards[] {
        return this.boardService.getAll();
    }

    @Post('/create')
    @UsePipes(ValidationPipe)
    createPost(
        @Body() createBoardDto : CreateBoardDto
    ) : Boards {
        return this.boardService.createPost(createBoardDto);
    }

    @Get('/:id')
    getBoardById(@Param('id') id : string) : Boards {
        return this.boardService.getBoardsById(id);
    } 

    @Delete('/:id')
    deleteBoardById(@Param('id') id : string) : void {
        this.boardService.deleteBoardsById(id);
    }

    @Patch('/:id')
    updateBoardsById(
        @Param('id') id : string, 
        @Body('content', BoardStatusValidationPipe) content: string) : Boards {
        return this.boardService.updateBoardsById(id, content);
    }
}
