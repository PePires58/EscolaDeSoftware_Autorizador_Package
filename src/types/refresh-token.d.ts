import { SignOptions } from "jsonwebtoken";

export class RefreshToken {
    static RefreshToken(
        token: string,
        chaveToken: string,
        config: SignOptions
    ): string
}