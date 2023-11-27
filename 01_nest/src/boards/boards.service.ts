import { Injectable } from '@nestjs/common';
import { Boards} from './models/boards.model';

@Injectable()
export class BoardsService {
    private boards : Boards[] = [];

    getAll() : Boards[] {
        return this.boards;
    }

    createPost(title: string, content:string){
        let board : Boards = {
            id : Math.PI,
            title : title,
            content : content,
        }
        
        this.boards.push(board);
        return board;
    }
}
