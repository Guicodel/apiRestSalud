var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/imc', function(req, res, next) {
	var imc=Number(req.body.masa)/Math.pow(Number(req.body.altura),2)
	res.send({
		"msn":"estas gordo"
	});

  //res.render('index', { title: 'Express' });
});

module.exports = router;
