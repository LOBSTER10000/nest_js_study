import { Injectable, NotFoundException } from '@nestjs/common';
import { Boards} from './models/boards.model';
import { CreateBoardDto } from './dto/create-board.dto';
import { v1 as uuid} from 'uuid';

@Injectable()
export class BoardsService {
    private boards : Boards[] = [];
    
    getAll() : Boards[] {
        return this.boards;
    }

    createPost(createBoardDto : CreateBoardDto){
        let board : Boards = {
            id : uuid(),
            title : createBoardDto.title,
            content : createBoardDto.content,
        }
        
        this.boards.push(board);
        return board;
    }

    getBoardsById(id: string) : CreateBoardDto {
        const found = this.boards.find((board) => board.id === id);
        if(!found){
            throw new NotFoundException(`아이디가 제대로 입력이 되지 않았습니다 ${id}`);
        }
        return found;
    }

    deleteBoardsById(id: string) : void {
        const found = this.getBoardsById(id);
        this.boards = this.boards.filter((board) => board.id !== found.id);
    }

    updateBoardsById(id : string, content: string) : Boards {
        let board = this.getBoardsById(id);
        board.content = content;
        return board;
    }
}
