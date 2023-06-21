const assert = require('assert').strict;
const tokenPackage = require('../index');

describe('Validate if token is created', function () {
    it('Should create a token', function () {
        const parameterSecret = {
            Parameter: {
                Value: 'minhaChave'
            }
        };

        const token = tokenPackage.criaToken({
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
});