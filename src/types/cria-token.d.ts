import { SignOptions } from "jsonwebtoken";
import { Usuario } from "../models/usuario";

declare class CriaToken {
    static CriarToken(
        usuario: Usuario,
        chaveToken: string,
        config: SignOptions
    ): string;
}

export default CriaToken;