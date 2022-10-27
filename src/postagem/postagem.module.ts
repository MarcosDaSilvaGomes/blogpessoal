import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TemaService } from "../tema/services/tema.service";
import { TemaModule } from "../tema/tema.module";
import { PostagemController } from "./controllers/postagem.controllers";
import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from "./services/postagem.services";


@Module({
    imports: [TypeOrmModule.forFeature([Postagem]), TemaModule],
    providers: [PostagemService, TemaService],
    controllers: [PostagemController],
    exports: [TypeOrmModule]
})
export class PostagemModule {}