import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { UserService } from "src/services/user.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService
    ){}

    async canActivate(context: ExecutionContext): Promise<boolean> {

        const request = context.switchToHttp().getRequest();
        const token = this.extractTokeFromHeader(request);

        if (!token) {
            throw new UnauthorizedException('token inexistente')
        }

        let username = '';
        try {
            const payload = await this.jwtService.verifyAsync(token)
            username = payload.userName;
        } catch {
            throw new UnauthorizedException('Token inválido')
        }

        const found =  await this.userService.findByUsername(username)

        if (!found) {
            throw new UnauthorizedException('Usuário não cadastrado')
        }

        return true;
    }

    extractTokeFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];

        return type === 'Bearer' ? token : undefined;
    }

}