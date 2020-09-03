var express = require('express');
var router = express.Router();
const axios = require('axios');

router.post('/auth/signup', async (req, res, next) => {
    try {
        await axios.post('https://auth-jwt.glitch.me/user/signup', {
            ...req.body,
        });
        res.render('login');
    } catch (err) {
        res.render('signup', {
            message: 'Something went wrong, check credentials and try again',
        });
    }
});

router.post('/auth/login', async (req, res, next) => {
    try {
        const response = await axios.post(
            'https://auth-jwt.glitch.me/user/login',
            {
                ...req.body,
            }
        );
        console.log(response.data.token);
        res.render('index', { token: response.data.token });
    } catch (err) {
        res.render('login', {
            message: 'Something went wrong, check credentials and try again',
        });
    }
});

module.exports = router;
