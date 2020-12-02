const express = require('express');
const nunjucks = require('nunjucks');
const { indexOf } = require('./data');
const videos = require('./data');

const server = express();

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
});

server.get('/', function (req, res) {
    const home = {
        avatar: '/perfil.png',
        name: 'Itallo Sá',
        links: [
            {
                url: 'https://github.com/itallosavieira',
                icon: 'fab fa-github',
            },
            {
                url: 'https://www.linkedin.com/in/itallo-s%C3%A1-vieira-06b86611a/',
                icon: 'fab fa-linkedin-in',
            },
            {
                url: 'mailto:hi@itallosa.dev',
                icon: 'fas fa-at',
            },
        ],

    }
    return res.render('home', { home });
});

server.get('/projects', function (req, res) {
    return res.render('projects', { items: videos });
});

server.get('/skills', function (req, res) {
    return res.render('skills');
});

server.get('/video', function (req, res) {
    const id = req.query.id;

    const video = videos.find(function(video) {
        if (video.id === id) {
            return true;
        };
    });

    if (!video) {
        return res.send('Video not found!');
    }

    return res.render('video', { video });

});

server.listen(5000, function () {
    console.log('server is running');
});

server.use(function (req, res) {
    res.status(404).render("not-found");
});