import { Usuario } from './../models/usuario';
import { CriaToken } from '../services/cria-token';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { ValidaToken } from '../services/valida-token';


describe('Testes de validação do token', () => {
    it('Deve validar o token', () => {
        const chaveToken = 'minhaChave';
        const usuario: Usuario = {
            nome: 'pedro',
            sobrenome: 'pires',
            email: 'pedrao@gmail.com',
            cpf: '11111111111'
        };

        const token = CriaToken.CriarToken(usuario,
            chaveToken,
            {
                expiresIn: '2 days',
                issuer: 'pedrao',
                notBefore: '120ms',
                audience: 'pedrao',
                subject: 'pedrao@gmail.com-pedrao'
            });

        const tokenValidado = ValidaToken.ValidarToken(
            token, chaveToken, {
            audience: 'pedrao',
            issuer: 'pedrao'
        }
        );

        expect(tokenValidado).not.null;
        expect(token).to.be.not.empty;
    });

    it('Deve criar um token sem passar alguns parametros', () => {
        const parameterSecret = 'minhaChave';
        const usuario: Usuario = {
            nome: 'pedro',
            sobrenome: 'pires',
            email: 'pedrao@gmail.com',
            cpf: '11111111111'
        };

        const token = CriaToken.CriarToken(usuario,
            parameterSecret,
            {
                issuer: 'pedrao',
                audience: 'pedrao',
                subject: 'pedrao@gmail.com-pedrao'
            });

        expect(token).to.be.not.empty;
    });
});
