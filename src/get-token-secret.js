const AWS = require('aws-sdk');
const ssm = new AWS.SSM({ apiVersion: '2014-11-06' });

module.exports = async function (caminhoParametro = '', withDecryption = false) {
    const params = {
        Name: caminhoParametro,
        WithDecryption: withDecryption
    };

    return await ssm.getParameter(params)
        .promise()
        .then((tokenSecret) => {
            return tokenSecret
        });
}