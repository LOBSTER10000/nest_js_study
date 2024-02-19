import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './middleware/test/boards/boards.module';

@Module({
  imports: [BoardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
