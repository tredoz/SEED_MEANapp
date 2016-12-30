var mongoose = require('mongoose');
module.exports = function (app) {
    app.get('/view/get/:slug', function (req, res, next) {
        if (req.params.slug === 'all') {
            app.models.seed_app.find(function (err, data) {
                res.json(data);
            });
        }
        else {
            app.models.seed_app.findOne({"slug": req.params.slug}, function (err, data) {
                res.json(data);
            });
        }
    });
}