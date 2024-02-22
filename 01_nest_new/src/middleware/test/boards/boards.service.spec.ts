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

  it('queryOne 함수가 숫자를 받아서 올바른 문자열을 반환하는지 테스트', () => {
    const id = 7; // 필요에 따라 값 변경

    // Act
    
    const spy = jest.spyOn(service, 'queryOne').mockImplementation((id : number) => {return 'this is boy'});
    //jest spyOne으로 함수의 리턴값이나 함수의 implements로 새롭게 값을 만들어주면
    //그것이 이 테스트코드의 리턴값으로 반영이 되어 확인이 가능해진다.

    // Assert
    expect(service.queryOne(8)).toBe('this is boy');
    expect(service.queryOne(7)).toEqual(`this is boy`);
    console.log(spy);
   
  });
});
