var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express', viewCount: req.session.views || 0 });
});

module.exports = router;
