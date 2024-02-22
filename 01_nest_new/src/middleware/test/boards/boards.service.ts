import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board, BoardStatus } from './boards.model';

@Injectable()
export class BoardsService {
  private boards : Board[] = [];
  create(createBoardDto: CreateBoardDto) {
    return 'This action adds a new board';
  }

  findAll() {
    return `This action returns all boards`;
  }

  findOne(id: string) {
    return `This action returns a #${id} board`;
  }

  queryOne(id: number){
    return `this action returns a #${id} board`;
  }

  remove(id: string) {
    return `This action removes a #${id} board`;
  }

  getAllBoards() : Board[] {
    return this.boards;
  }

  createBoard(createBoardDto : CreateBoardDto) : Board{
    const board : Board = {
      id : createBoardDto.id,
      password : createBoardDto.password,
      title : createBoardDto.title,
      content : createBoardDto.content,
      status : BoardStatus.PUBLIC,
    }
  
    this.boards.push(board);
    return board;
  }

  getBoardsByTitle(id : string) : Board{
    return this.boards.find((board)=>board.id === id);
  }

  deleteBoardById(id : string) : void{
    this.boards = this.boards.filter((board)=>board.id !== id);
    //board가 void형태이므로 return값이 아니기에 자신의 형태를 재정의해줘야함
  }

  updateBoardById(id : string, status : BoardStatus){
    const board = this.getBoardsByTitle(id);
    board.status = status;
    return board.status;
  }
}
