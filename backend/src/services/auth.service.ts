import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { ApplicationException } from "src/exception";
import { Repository } from "typeorm";

@Injectable()
export class AuthService {

    constructor(

        @InjectRepository(User)
        private readonly repository: Repository<User>
    ){}

    async validateCredential(username: string, password: string): Promise<User> {
        const found: User = await this.repository.findOneBy({username: username});

        if (!found) {
            throw new ApplicationException('invalid user', 401)
        }

        if (found.password !== password) {
            throw new ApplicationException('invalid password', 401)
        }

        return found;
    }
}