var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {

    console.log('req', req);
    console.log('req.session', req.session);
    console.log('req.session.token', req.session.token);

    if(req.session.token) {
        res.send('logged in');
    } else {
        res.redirect('/');
    }

});

module.exports = router;
