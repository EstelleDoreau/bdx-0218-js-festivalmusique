var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	delete req.session.login;
  res.render('blockcontent/accueil');
});

module.exports = router;
