
/**
 * Getting api info
 * @param {*} app
 * @param {*} router
 */
module.exports = (app, router) => {
   app.use('/info', require('./controller/healthCheck')(router));
}