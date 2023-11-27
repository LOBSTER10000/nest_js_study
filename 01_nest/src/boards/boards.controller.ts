import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Boards } from './models/boards.model';

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
    createPost(
        @Body('title') title : string,
        @Body('content') content : string,
    ) : Boards {
        return this.boardService.createPost(title, content);
    }
}
