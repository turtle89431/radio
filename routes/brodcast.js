var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var port = res.app.get('port')
    res.render('play', { title: 'Express', port });
});
router.get("/mic", (req, res, next) => {
    var port = res.app.get('port')
    res.render("up", { port })
})
module.exports = router;