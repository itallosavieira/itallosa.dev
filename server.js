const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
    express: server
});

server.get('/', function (req, res) {
    return res.render('home');
});

server.get('/projects', function (req, res) {
    return res.render('projects');
});

server.get('/skills', function (req, res) {
    return res.render('skills');
});

server.listen(5000, function () {
    console.log('server is running');
});

server.use(function (req, res) {
    res.status(404).render("not-found");
});