var express = require('express');
var router = express.Router();
//var Account = require('../models/m_account');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { 
    	title: 'practice' 
    });
});

module.exports = router;