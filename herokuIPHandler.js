const handler = () => {
    return (req, res, next) => {
        req.ip = '';
        req.ipError = '';

        try {
            let ipAddr = req.headers["x-forwarded-for"];
            if (ipAddr) {
                let list = ipAddr.split(",");
                ipAddr = list[list.length - 1];
            } else {
                ipAddr = req.connection.remoteAddress;
            }

            req.ip = ipAddr;
        } catch (error) {
            req.ipError = error;
        }

        next();
    }
};

module.exports = {
    handler
};