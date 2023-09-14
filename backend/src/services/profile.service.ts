import { Injectable } from "@nestjs/common";

@Injectable()
export class ProfileService {

    profile() {
        return {
            fullname: 'Breno Balbinotti de Mello',
            username: 'BrenodeMello',
            description: 'não sei o que escrever',
            creatdAt: '2023-08-15'
        }

    }
}