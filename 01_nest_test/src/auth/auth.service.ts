import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from 'src/entity/auth.entity';
import { Repository } from 'typeorm';
import { AuthCredentialDto } from './dto/auth_credential.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt/dist';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Auth)
        private authRepository : Repository<Auth>,
        private jwtService : JwtService
    ){}

    async postSign(authCredentialDto : AuthCredentialDto) : Promise<Auth> {
        const {username, password} = authCredentialDto;
        
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const user =  this.authRepository.create({username, password : hashedPassword});
        return await this.authRepository.save(user);
    }

    async signIn(authCredentialDto : AuthCredentialDto) : Promise<{accessToken : string}>{
        const {username, password } = authCredentialDto;
        const user = await this.authRepository.findOne({where :
        {username : username}});

        if(user && (await bcrypt.compare(password, user.password))){
            //유저 토큰 생성 (시크릿 + 페이로드)-> 페이로드에는 중요한 정보들을 넣으면 안됨
            // 위변조 하기가 쉬움
            const payload = { username};
            const accessToken = await this.jwtService.sign(payload);

            
            return {accessToken : accessToken};
        } else {
            throw new UnauthorizedException('login failed')
        }
    }
}
