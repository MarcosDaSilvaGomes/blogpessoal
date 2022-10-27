import { Module } from "@nestjs/common";
import { UsuarioModule } from "../usuario/usuario.module";
import { Bcrypt } from "./bcrypt/bcrypt";
import { jwtConstants } from "./constants/constants";
import { AuthController } from "./controllers/auth.controller";
import { JwtStrategy } from "./strategy/jwt.strategy";
import { LocalStrategy } from "./strategy/local.strategy";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./services/auth.service";

    @Module({
        imports :[
            UsuarioModule,
            PassportModule,
            JwtModule.register({
                secret: jwtConstants.secret,
                signOptions: { expiresIn: '24h'},  
            })
        ],
        providers:[Bcrypt, AuthService, 
            LocalStrategy, JwtStrategy],
        controllers:[ AuthController],
        exports:[Bcrypt],
    })
    export class AuthModule {}