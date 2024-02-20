import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  //여기에 AppController와 관련된 여러 테스트 케이스 작성

  beforeEach(async () => {
    //여기에 각 테스트 케이스 실행전에 수행되어야할 코드들 작성
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    // 테스트할 컨트롤러와, 모듈들을 등록합니다.
    app = moduleFixture.createNestApplication();
    await app.init();
    // 
  });

  it('/ (GET)', () => {
    //테스트 케이스들을 정의
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
