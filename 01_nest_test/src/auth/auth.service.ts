import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from 'src/entity/auth.entity';
import { Repository } from 'typeorm';
import { AuthCredentialDto } from './dto/auth_credential.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Auth)
        private authRepository : Repository<Auth>
    ){}

    async postSign(authCredentialDto : AuthCredentialDto) : Promise<Auth> {
        const {username, password} = authCredentialDto;
        
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const user =  this.authRepository.create({username, password : hashedPassword});
        return await this.authRepository.save(user);
    }

    async signIn(authCredentialDto : AuthCredentialDto) : Promise<string>{
        const {username, password } = authCredentialDto;
        const user = await this.authRepository.findOne({where :
        {username : username}});

        if(user && (await bcrypt.compare(password, user.password))){
            return 'login success';
        } else {
            throw new UnauthorizedException('login failed')
        }
    }
}
