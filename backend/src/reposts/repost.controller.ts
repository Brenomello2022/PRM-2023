import { Body, Controller, Get, Param, ParseIntPipe, Post, Delete, HttpCode, HttpException, 
HttpStatus, UseGuards, UseInterceptors, ClassSerializerInterceptor, Query } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { TopicService } from "src/topics/topic.service";
import { RepostService } from "./repost.service";
import { Topic } from "src/topics/topic.entity";
     
@UseInterceptors(ClassSerializerInterceptor)
@Controller('reposts')
export class RepostController {
    
    constructor(
        private readonly repostService: RepostService,
        private readonly topicService: TopicService
        ) {}
    
    @UseGuards(AuthGuard)
    @Get()
    async filterbyTopic(@Query() query): Promise<Topic[]> {
    
        if (!query?.topic) {
                throw new HttpException('Tópico não informado', HttpStatus.BAD_REQUEST)
        }
        // Buscar os tópicos do usuário
        const found = await this.topicService.findById(query.topic);
        if (!found) {
            throw new HttpException('Tópico não encontrado', HttpStatus.BAD_REQUEST)     
        }
        
        return this.repostService.findByTopic(found);

    }
}