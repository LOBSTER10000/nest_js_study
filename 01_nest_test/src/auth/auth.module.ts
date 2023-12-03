import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from 'src/entity/auth.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports : [
    PassportModule.register({
      defaultStrategy: 'jwt'
    })
    ,JwtModule.register({
      secret: 'superhero',
      signOptions: {
        expiresIn : 3600,
      }
    })
    ,TypeOrmModule.forFeature([Auth])],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports : [JwtStrategy, PassportModule]
})
export class AuthModule {}
