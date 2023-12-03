import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from 'src/entity/board.entity';
import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/create_board.dto';

@Injectable()
export class BoardService {
    constructor(
        @InjectRepository(Board)
        private boardRepository : Repository<Board>
    ){}
    
    async getBoard() : Promise<Board[]> {
        const board = await this.boardRepository.find();

        if(!board){
            throw new NotFoundException('여기에는 아무런 값이 없습니다');
        }
        return board;
    }

    async createBoard(createBoardDto : CreateBoardDto){
        return await this.boardRepository.save(createBoardDto);
    }

    async getOne(id : number) : Promise<Board>{
        const board = await this.boardRepository.findOne({where : {id: id}});

        if(!board){
            throw new NotFoundException('여기에는 아무런 값이 없습니다');
        }

        return board;
    }
}
