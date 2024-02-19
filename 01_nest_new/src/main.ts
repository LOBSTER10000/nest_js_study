import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {join} from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { urlencoded } from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(urlencoded({extended: true}));
  app.setViewEngine('ejs');
  app.setBaseViewsDir(join(__dirname, '..', 'src', 'view'));
  app.useStaticAssets(join(__dirname, '..', 'src', 'static'), {index : false});
  await app.listen(3000);
}
bootstrap();
