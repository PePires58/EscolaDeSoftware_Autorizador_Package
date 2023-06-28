import { SignOptions } from "jsonwebtoken";
import { Usuario } from "../models/usuario";

export class CriaToken {
    static CriarToken(
        usuario: Usuario,
        chaveToken: string,
        config: SignOptions
    ): string;
}