function isAuthenticated(req, res) {
    if(req.session.token) {
        res.send('logged in');
    } else {
        res.redirect('/');
    }
}
