import jwt, { VerifyOptions } from "jsonwebtoken";

export class ValidaToken {
    static ValidarToken(
        token: string,
        chaveToken: string,
        config: VerifyOptions
    ): jwt.JwtPayload;
}