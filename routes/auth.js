var uid = require('uid-safe')
var axios = require('axios');
var express = require('express');
var router = express.Router();

/* GET auth code from github listing. */
router.get('/', function (req, res, next) {

    var body = {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        code: req.query.code
    }
    var options = { headers: { accept: 'application/json' } };

    axios.post('https://github.com/login/oauth/access_token', body, options)
    .then(function(response) {
        console.log('auth data', response.data);
        req.session.token = response.data.access_token;
        req.session.scope = response.data.scope;
        res.redirect('/dashboard');
    })
    .catch(function(error) {
        console.log('error', error);
        res.redirect('/');
    });

});

module.exports = router;
