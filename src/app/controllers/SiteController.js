const Course = require('../models/Course');
const {mutipleMongooseToOject} =require('../../util/mongoose')

class SiteController {
    // [GET] /
    index(req, res, next) {


        // res.render('home');

        // Course.find({}, function (err, courses) {
        //     if (!err) {
        //         res.json(courses);
        //     } else {
        //         next(err);
        //         res.status(500).json({ error: 'ERROR' });
        //     }
        // });

        Course.find({})
            .then(courses => {
                // courses = courses.map(course => course.toObject());

                res.render('home', {
                    courses: mutipleMongooseToOject(courses)
                });
            })
            .catch(next);

       /* Course.find({}, function (err, courses) {
            // if (!err) {
            //     res.json(courses);
            // } else {
            //     res.status(500).json({ error: 'ERROR' });
            // }
            !err ? res.json(courses) : res.status(500).json({ error: 'ERROR' });
        });*/
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
