import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { InjectRepository} from '@nestjs/typeorm';
import { Board } from './domain/board.entity';
import { Repository} from 'typeorm';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private boardRepository : Repository<Board>
  ){}

  async create(createBoardDto: CreateBoardDto) {
    return await this.boardRepository.save(createBoardDto);
  }

  async findAll() {
    return await this.boardRepository.find();
  }

  async findOne(id: number) {
    return await this.boardRepository.findOne({where : {id : id}});
  }

  async update(id: number, updateBoardDto: UpdateBoardDto) {
    const board = await this.boardRepository.findOne({where : {id : id}});
    if(!board){
      throw new Error('board not found');
    }
    Object.assign(board, updateBoardDto);
    return await this.boardRepository.save(board);
  }

  async remove(id: number) {
    const board = await this.boardRepository.findOne({where : {id : id}});
    if(!board){
      throw new Error('board id not found');
    }
    return await this.boardRepository.remove(board);
  }
}
