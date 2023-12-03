import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { Auth } from "src/entity/auth.entity";

export const GetUser = createParamDecorator((data, ctx : ExecutionContext) : Auth =>{
    const req = ctx.switchToHttp().getRequest();
    return req.user;
})
