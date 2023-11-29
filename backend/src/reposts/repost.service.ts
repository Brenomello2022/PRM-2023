import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Topic } from "src/topics/topic.entity";

@Injectable()
export class RepostService {

    constructor(
        @InjectRepository(Topic)
        private readonly repository: Repository<Topic>
    ) {}

    findByTopic(topic: Topic): Promise<Topic[]> {
        return this.repository.find({
            where: {
                repost: {
                    id: topic.id
                }
            }
        });
    }
}