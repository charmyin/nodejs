var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Charmyin\'s blog', name: 'charmyin', test:'<a href="http://www.baidu.com">百度</a>'});
});

module.exports = router;
