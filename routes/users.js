var express = require('express');
var router = express.Router();
var Users = {}
    /* GET users listing. */
router.get('/', function(req, res, next) {
    res.io.emit("getUsers", "none")
    res.send('respond with a resource');
});
router.get('/login', function(req, res, next) {
    res.io.emit("getUsers", "Users")
    res.send('respond with a resource');
});
module.exports = router;