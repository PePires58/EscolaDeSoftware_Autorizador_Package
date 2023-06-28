import jwt, { SignOptions } from 'jsonwebtoken';
import { Usuario } from '../types/usuadio';

export class CriaToken {
    static CriarToken(
        usuario: Usuario,
        chaveToken: string,
        config: SignOptions = {
            expiresIn: '2 days',
            notBefore: '120ms'
        }
    ): string {

        const { notBefore, ...signOptions } = config;

        const token = jwt.sign(usuario, chaveToken, {
            expiresIn: signOptions.expiresIn || '2 days',
            issuer: signOptions.issuer,
            notBefore: notBefore || '120ms',
            subject: signOptions.subject,
            audience: signOptions.audience,
        });

        return token;
    }
}