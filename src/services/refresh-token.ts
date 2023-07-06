import jwt, { SignOptions } from "jsonwebtoken";
import { ValidaToken } from "./valida-token";
import { CriaToken } from "./cria-token";
import { Usuario } from "../models/usuario";

export class RefreshToken {
    RefreshToken(
        token: string,
        chaveToken: string,
        config: SignOptions
    ): string {
        let tokenValidado = new ValidaToken().ValidarToken(token, chaveToken, config);

        tokenValidado = this.DeletarPropriedadesToken(tokenValidado);

        return new CriaToken().CriarToken(tokenValidado as Usuario, chaveToken, config);
    }

    private DeletarPropriedadesToken(token: jwt.JwtPayload): object {
        delete token.iat;
        delete token.exp;
        delete token.nbf;
        delete token.jti;
        delete token.aud;
        delete token.iss;
        delete token.sub;

        return token;
    }
}