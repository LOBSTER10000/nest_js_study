import { IsString, Matches, MaxLength, MinLength } from "class-validator";


export class AuthCredentialDto {
    @IsString()
    @MinLength(4)
    @MaxLength(30)
    username : string;

    @IsString()
    @MinLength(5)
    @MaxLength(100)
    @Matches(/^[a-zA-Z0-9]*$/, {
        message : '패스워드는 오직 영어와 숫자만 입력 가능'
    })
    password : string;
}