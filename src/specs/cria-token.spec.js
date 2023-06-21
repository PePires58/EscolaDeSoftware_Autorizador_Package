const assert = require('assert').strict;
const tokenPackage = require('../index');

describe('Verify if token is valid', function () {
    it('Should verify token', function () {
        const parameterSecret = {
            Parameter: {
                Value: 'minhaChave'
            }
        };

        const tokenString = tokenPackage.criaToken({
            'email': 'pedrao@gmail.com'
        }, parameterSecret.Parameter.Value, {
            issuer: 'pedrao',
            expiresIn: '2 days',
            notBefore: '120ms',
            audience: 'pedrao',
            subject: 'pedrao@gmail.com-pedrao'
        });


        const tokenObject = tokenPackage.validaToken(tokenString,
            parameterSecret.Parameter.Value,
            {
                issuer: 'pedrao',
                audience: 'pedrao'
            });

        assert.notEqual('', tokenString);
        assert.notEqual('', tokenObject.toString());
    })
});