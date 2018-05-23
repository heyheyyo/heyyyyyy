var router = require('express').Router();
//var Account = require('../models/m_account');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { 
    	title: 'practice' 
    });
});

router.get('/login', function(req, res, next) {
    res.render('login', { 
    	title: 'Login' 
    });
});


router.get('/profile', function(req, res, next) {
    res.render('profile', { 
    	title: 'profile' 
    });
});

//router.use('/account', require('./account'));


module.exports = router;