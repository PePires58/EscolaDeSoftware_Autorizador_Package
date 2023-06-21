const assert = require('assert').strict;
const tokenService = require('../services/token.service');

describe('Validate credentials object service tests', function () {
    it('Should create a token', function () {
        const parameterSecret = {
            Parameter: {
                Value: 'minhaChave'
            }
        };

        const token = tokenService.criarToken({
            'email': 'pedrao@gmail.com'
        }, parameterSecret);

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
        }, parameterSecret);


        const tokenObject = tokenService.validarToken(tokenString,
            parameterSecret);

        assert.notEqual('', tokenString);
        assert.notEqual('', tokenObject.toString());
    })
});