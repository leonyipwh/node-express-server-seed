// Modules
var webAPI = require('./webAPI');

// Express Router
var router = require('express').Router();

// Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
    var date = new Date();
    console.log('Time: ', date);
    // console.log('Local Time: ', date.toLocaleString());
    next();
});

// Setup Route
router.route('/web').get(webAPI.get);

module.exports = router;