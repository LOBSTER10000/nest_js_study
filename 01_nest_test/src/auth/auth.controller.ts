import { Body, Controller, ValidationPipe, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth_credential.dto';
import { Auth } from 'src/entity/auth.entity';

@Controller('auth')
export class AuthController {
    
constructor(private authService : AuthService){}

    @Post('/sign')
    postSign(@Body(ValidationPipe) authCredentialDto : AuthCredentialDto) : Promise<Auth>{
        return this.authService.postSign(authCredentialDto);
    }

    @Post('/signin')
    signIn(@Body(ValidationPipe) authCredentialDto : AuthCredentialDto) : Promise<string> {
        return this.authService.signIn(authCredentialDto);
    }
}
