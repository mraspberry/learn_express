var express = require('express');
var router = express.Router();

/* GET status page. */
router.get('/status', function(req, res, next) {
  res.render('status', { health: 'OK', title: 'Health Check' });
});

module.exports = router;
