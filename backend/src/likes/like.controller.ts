import { Body, Controller, Get, Param, ParseIntPipe, Post, Delete, HttpCode, HttpException, 
    HttpStatus, UseGuards, UseInterceptors, ClassSerializerInterceptor, Query } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { TopicService } from "src/topics/topic.service";
import { LikeService } from "./like.service";
import { Likes } from "./like.entity";
     
    @UseInterceptors(ClassSerializerInterceptor)
    @Controller('likes')
    export class LikeController {
    
        constructor(
            private readonly service: LikeService,
            private readonly topicService: TopicService
            ) {}
    
        @UseGuards(AuthGuard)
        @Get()
        async findbyTopic(@Query() query): Promise<Likes[]> {
    
            if (!query?.topic) {
                throw new HttpException('Tópico não informado', HttpStatus.BAD_REQUEST)
            }
            // Buscar os tópicos do usuário
            const found = await this.topicService.findById(query.topic);
            if (!found) {
                throw new HttpException('Tópico não encontrado', HttpStatus.BAD_REQUEST)     
            }
        
            return this.service.findByTopic(found);

        }
        @Post()
        create(@Body() topic: Likes): Promise<Likes> {
            return this.service.create(topic);
        }
    
        @Delete(':id')
        @HttpCode(204)
        async delete(@Param('id', ParseIntPipe)id: number): Promise<void> {
            return this.service.delete(id);
        }
    }