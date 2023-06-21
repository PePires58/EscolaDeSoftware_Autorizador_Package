const assert = require('assert').strict;
const tokenPackage = require('../index');

describe('Cria token tests', function () {
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

    it('Should create a token with out passing some parameters', function () {
        const parameterSecret = {
            Parameter: {
                Value: 'minhaChave'
            }
        };

        const token = tokenPackage.criaToken({
            'email': 'pedrao@gmail.com'
        }, parameterSecret.Parameter.Value, {
            issuer: 'pedrao',
            audience: 'pedrao',
            subject: 'pedrao@gmail.com-pedrao'
        });

        assert.notEqual('', token);
    });
});