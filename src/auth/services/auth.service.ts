import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Bcrypt } from "../bcrypt/bcrypt";
import { UsuarioService } from "../../usuario/services/usuario.service";

@Injectable()
export class AuthService {
    constructor (
    private usuarioService: UsuarioService,
    private jwService: JwtService,
    private bcrypt: Bcrypt
){}

async validateUser (username : string, password: string) {
    const bucarUsuario = await this.usuarioService.findByUsuario(username)

    if (!bucarUsuario)
    throw new HttpException('Usuario não encontrado!', HttpStatus.NOT_FOUND);

    const match = await this.bcrypt.compararSenhas(bucarUsuario.senha, password);
    if (bucarUsuario && match){
        const {senha , ... result} = bucarUsuario
        return result; 
    }
    return null
}
    async login (usuarioLogin: any){
        const paylod = {
            username: usuarioLogin.usuario,
            sub: 'blogpessoal'
        };

        return {
            usuario: usuarioLogin.usuario,
            token: `Bearer ${this.jwService.sign(paylod)}`,
        };
    }
}