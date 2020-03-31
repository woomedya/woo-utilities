const returnModel = require('./returnModel');
const wooCrypto = require('woo-crypto');
const dateUtil = require("./date");

var opts = { publicKey: '', privateKey: '' };

const init = ({
    publicKey, privateKey
}) => {
    opts.publicKey = publicKey;
    opts.privateKey = privateKey;
}

const handler = (tokenType) => {
    return async (req, res, next) => {
        var token = req.headers.token;
        if (token) {
            var decrypted = wooCrypto.default.decrypt(token, opts.publicKey, opts.privateKey) || '';
            var decryptedJSON = JSON.parse(decrypted);

            decryptedJSON.type == tokenType && (dateUtil.getUTCTime() < decryptedJSON.expire || decryptedJSON.expire == "") ?
                next() :
                res.status(403).send(
                    returnModel({
                        status: false,
                        auth: false
                    })
                );
        } else {
            res.status(403).send(
                returnModel({
                    status: false,
                    auth: false
                })
            );
        }
    }
};

module.exports = {
    init,
    handler
};