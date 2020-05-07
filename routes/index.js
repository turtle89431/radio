var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.io.emit("getUsers", "Users")
    res.render('index', { title: 'Express', port: res.app.get('port') });
});

module.exports = router;