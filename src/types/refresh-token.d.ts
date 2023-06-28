import { SignOptions } from "jsonwebtoken";

declare class RefreshToken {
    static RefreshToken(
        token: string,
        chaveToken: string,
        config: SignOptions
    ): string
}

export default RefreshToken;