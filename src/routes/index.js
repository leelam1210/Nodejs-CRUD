const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me');




function route(app) {
    // app.get('/news', (req, res) => {
    //     res.render('news');
    // });
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);



    // app.get('/search', (req, res) => {
    //     res.render('search');
    // });
    // app.use('/search', siteRouter);

    // app.get('/', (req, res) => {
    //     res.render('home');
    // });
    app.use('/', siteRouter);

    // app.post('/search', (req, res) => {
    //     console.log(req.body);
    //     res.send('');
    // });
}

module.exports = route;
