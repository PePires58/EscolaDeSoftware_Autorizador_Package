const assert = require('assert').strict;
const tokenService = require('../token.service');

describe('Validate credentials object service tests', function () {
    it('Should create a token', function () {
        const parameterSecret = {
            Parameter: {
                Value: 'minhaChave'
            }
        };

        const token = tokenService.criarToken({
            'email': 'pedrao@gmail.com'
        }, parameterSecret.Parameter.Value, {
            expiresIn: '2 days',
            issuer: 'pedrao',
            notBefore: '120ms',
            audience: 'pedrao',
            subject: 'pedrao@gmail.com-pedrao'
        });

        assert.notEqual('', token);
    });

    it('Should verify token', function () {
        const parameterSecret = {
            Parameter: {
                Value: 'minhaChave'
            }
        };

        const tokenString = tokenService.criarToken({
            'email': 'pedrao@gmail.com'
        }, parameterSecret.Parameter.Value, {
            issuer: 'pedrao',
            expiresIn: '2 days',
            notBefore: '120ms',
            audience: 'pedrao',
            subject: 'pedrao@gmail.com-pedrao'
        });


        const tokenObject = tokenService.validarToken(tokenString,
            parameterSecret.Parameter.Value,
            {
                issuer: 'pedrao',
                audience: 'pedrao'
            });

        assert.notEqual('', tokenString);
        assert.notEqual('', tokenObject.toString());
    })
});