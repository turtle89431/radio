var express = require('express');
var router = express.Router();
var port = res.app.get('port')
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('play', { title: 'Express', port });
});
router.get("/mic", (req, res, next) => {
    res.render("up", { port })
})
module.exports = router;