var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home' });
});

router.get('/signup', function (req, res, next) {
    res.render('signup', { title: 'Signup' });
});

router.get('/login', (req, res, next) => {
    res.render('login', { title: 'Login' });
});

router.get('/profile', (req, res, next) => {
    res.render('profile', { title: 'Profile' });
});

module.exports = router;
