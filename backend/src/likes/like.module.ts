import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Likes } from "./like.entity";
import { LikeService } from "./like.service";
import { LikeController } from "./like.controller";
import { TopicModule } from "src/topics/topic.module";
import { UserModule } from "src/users/user.module";
import { User } from "src/users/user.entity";
import { Topic } from "src/topics/topic.entity";

@Module({
    imports: [ 
        TypeOrmModule.forFeature([ Likes, User, Topic ]),
        TopicModule,
        UserModule 
    ],
    providers: [ LikeService ],
    controllers: [ LikeController ]
})
export class LikeModule {}