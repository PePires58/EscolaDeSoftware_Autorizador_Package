const jwt = require('jsonwebtoken');

function criarToken(userObject = {}, privateKey = '',
    config = {
        expiresIn: '2 days',
        issuer: '',
        notBefore: '120ms',
        subject: '',
        audience: ''
    }) {

    const token = jwt.sign(userObject, privateKey, {
        expiresIn: config.expiresIn,
        issuer: config.issuer,
        notBefore: config.notBefore,
        subject: config.subject,
        audience: config.audience,
    });

    return token;
}

function validarToken(token = '', privateKey = '', config = {
    issuer: '',
    audience: ''
}) {

    let tokenInformations = jwt.verify(token, privateKey, {
        issuer: config.issuer,
        audience: config.audience
    });

    tokenInformations = deletarPropriedadesToken(tokenInformations);

    return tokenInformations;
}

function deletarPropriedadesToken(token) {
    delete token.iat;
    delete token.exp;
    delete token.nbf;
    delete token.jti;
    delete token.aud;
    delete token.iss;
    delete token.sub;

    return token;
}


module.exports = { criarToken, validarToken };