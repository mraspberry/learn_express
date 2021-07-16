var express = require('express');
var router = express.Router();

global.target = "World";

/* GET users listing. */
router.get('/hello', function(req, res, next) {
  res.json({ message: `Hello ${target}!` });
});

router.post('/greet', function(req, res, next) {
    global.target = req.body.name;
    res.json({})
});

module.exports = router;
