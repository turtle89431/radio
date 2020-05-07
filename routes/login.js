var express = require('express');
var router = express.Router();
var nodedb = require('node-json-db');
let db = new nodedb.JsonDB("users")
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Express', port: res.app.get('port'), users: db.getData("/login") });
});
router.get("/check", (req, res, next) => {
    res.send(db.getData("/login"))
})
router.get("/signup", (req, res, next) => {
    res.render("signup")
})
router.post('/add', (req, res, next) => {
    db.push(`/test/${req.body.user}`, req.body)
    res.send(`<a href="/"><h1>Continue</h1></a>`)
})
module.exports = router;