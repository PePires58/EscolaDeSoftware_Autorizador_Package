import jwt, { VerifyOptions } from "jsonwebtoken";

declare class ValidaToken {
    static ValidarToken(
        token: string,
        chaveToken: string,
        config: VerifyOptions
    ): jwt.JwtPayload;
}