import { Test, TestingModule } from '@nestjs/testing';
import { BoardsService } from './boards.service';

describe('BoardsService', () => {
  let service: BoardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoardsService],
    }).compile();

    service = module.get<BoardsService>(BoardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findOne', ()=> {
    const id = 7;
   

    const result = service.findOne(id);
    expect(result).toBe("This action returns a #7 board");
  })
});
