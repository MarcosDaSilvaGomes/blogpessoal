import { Controller, HttpStatus,Get , HttpCode, ParseIntPipe } from "@nestjs/common";
import { Param } from "@nestjs/common/decorators";
import { Postagem } from "./entitites/postagem.entity";
import { PostagemService } from "./services/postagem.services";


@Controller ('/postagem')
export class PostagemController {
constructor (private readonly postagemService: PostagemService) {}

@Get ()
@HttpCode(HttpStatus.OK)

findAll(): Promise<Postagem[]> {
    return this.postagemService.findAll ()
}

@Get('/:id')
@HttpCode(HttpStatus.Ok)
findById(@Param('id', ParseIntPipe))
id: number
): Promise<Postagem>{
    return this.postagemService.findById(id)
 }
}