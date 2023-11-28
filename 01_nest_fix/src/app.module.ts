import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { ormConfig } from './orm.config';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({useFactory : ormConfig}),
    BoardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
