import { Body, Controller, ValidationPipe, Post, Req, UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth_credential.dto';
import { Auth } from 'src/entity/auth.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';


@Controller('auth')
export class AuthController {
    
constructor(private authService : AuthService){}

    @Post('/sign')
    postSign(@Body(ValidationPipe) authCredentialDto : AuthCredentialDto) : Promise<Auth>{
        return this.authService.postSign(authCredentialDto);
    }

    @Post('/signin')
    signIn(@Body(ValidationPipe) authCredentialDto : AuthCredentialDto) : Promise<{accessToken : string}> {
        return this.authService.signIn(authCredentialDto);
    }

    @Post('/test')
    @UseGuards(AuthGuard())
    test(@GetUser() auth : Auth){
        console.log('유저', auth);
    }
}
