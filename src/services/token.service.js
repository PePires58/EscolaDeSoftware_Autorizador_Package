const jwt = require('jsonwebtoken');

function criarToken(user, privateKey) {

    const token = jwt.sign(user, privateKey.Parameter.Value, {
        expiresIn: '2 days',
        issuer: 'escoladesoftware',
        notBefore: '120ms',
        subject: user.email + '-escoladesoftware-user-token',
        audience: 'escoladesoftware',
    });

    return token;
}

function validarToken(token, privateKey) {

    let tokenInformations = jwt.verify(token, privateKey.Parameter.Value, {
        issuer: 'escoladesoftware',
        audience: 'escoladesoftware'
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