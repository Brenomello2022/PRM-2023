import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Topic } from "src/topics/topic.entity";
import { Likes } from "./like.entity";

@Injectable()
export class LikeService {

    constructor(
        @InjectRepository(Likes)
        private readonly repository: Repository<Likes>
    ) {}

    findByTopic(topic: Topic): Promise<Likes[]> {
        return this.repository.find({
            where: {
                topic: {
                    id: topic.id
                }
            }
        });
    }

    create(topic: Likes): Promise<Likes> {
        return this.repository.save(topic);
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}