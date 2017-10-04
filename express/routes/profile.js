var express = require('express');
var router = express.Router();
var session = require('express-session');

/* GET users listing. */
router.get('/', function (req, res) {
  var user = req.session.smsession['user']
  var group = req.session.smsession['group']

  res.json({
    user: user,
    group: group
  });
});

module.exports = router;
