const jwt = require('jsonwebtoken');

module.exports = function (userObject = {}, privateKey = '',
    config = {
        expiresIn: '',
        issuer: '',
        notBefore: '',
        subject: '',
        audience: ''
    }) {

    const token = jwt.sign(userObject, privateKey, {
        expiresIn: config.expiresIn || '2 days',
        issuer: config.issuer,
        notBefore: config.notBefore || '120ms',
        subject: config.subject,
        audience: config.audience,
    });

    return token;
}

exports.validarToken = function (token = '', privateKey = '', config = {
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