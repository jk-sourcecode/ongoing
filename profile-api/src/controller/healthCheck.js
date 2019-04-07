const packageFile = require('../../package.json');

module.exports = (router) => {
    router.get('/', async (req, res, next) => {
        try {
            let infoData = await { name: packageFile.name, status: 'OK', version: packageFile.version };
            res.status(200).json(infoData);
        } catch (e) {
            next(e);
        }
    })

    return router;
}