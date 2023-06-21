const AWS = require('aws-sdk');
const ssm = new AWS.SSM({ apiVersion: '2014-11-06' });

async function buscarSegredoToken(withDecryption) {
    const params = {
        Name: process.env.TokenSecretParameterName,
        WithDecryption: withDecryption
    };

    return await ssm.getParameter(params)
        .promise()
        .then((tokenSecret) => {
            return tokenSecret
        });
}

module.exports = buscarSegredoToken;