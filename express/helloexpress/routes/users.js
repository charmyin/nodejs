var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/:name', function(req, res) {
  res.send('get user name is '+ req.params.name);
});

router.showTime = function(req, res){
	res.send(new Date().toString());
}

module.exports = router;
