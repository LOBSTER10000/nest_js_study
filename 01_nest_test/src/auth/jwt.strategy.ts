import { ExtractJwt, Strategy } from "passport-jwt";
import { Injectable, UnauthorizedException} from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Auth } from "src/entity/auth.entity";
import { PassportStrategy} from '@nestjs/passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){


    constructor(
        @InjectRepository(Auth)
        private authRepository : Repository<Auth>
    ){
        super({
            secretOrKey : 'superhero',
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken()
        })
    }
    
    async validate(payload){
        const { username } = payload;
        const user : Auth = await this.authRepository.findOne({
            where  : {username : username}
        });

        if(!user){
            throw new UnauthorizedException();
        } else {
            return user;
        }
    }

}