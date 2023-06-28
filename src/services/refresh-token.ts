import jwt, { SignOptions } from "jsonwebtoken";
import { ValidaToken } from "./valida-token";
import { CriaToken } from "./cria-token";
import { Usuario } from "../types/usuadio";

export class RefreshToken {
    static RefreshToken(
        token: string,
        chaveToken: string,
        config: SignOptions
    ): string {
        let tokenValidado = ValidaToken.ValidarToken(token, chaveToken, config);

        tokenValidado = this.DeletarPropriedadesToken(tokenValidado);

        return CriaToken.CriarToken(tokenValidado as Usuario, chaveToken, config);
    }

    private static DeletarPropriedadesToken(token: jwt.JwtPayload): object {
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