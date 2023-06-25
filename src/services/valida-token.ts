import jwt, { VerifyOptions } from "jsonwebtoken";

export class ValidaToken {
    static ValidarToken(
        token: string = '',
        chaveToken: string = '',
        config: VerifyOptions = {}
    ): jwt.JwtPayload {
        const tokenInformations = jwt.verify(token, chaveToken, config);
        return tokenInformations as jwt.JwtPayload;
    }
}