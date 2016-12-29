var mongoose = require('mongoose');
module.exports = function (app) {
    app.get('/view/:slug', function (req, res) {
        app.models.mean_app.findOne({"slug": req.params.slug}, function (err, data) {
            res.json(data);
        });
    });
    app.get('/view', function (req, res) {
        app.models.mean_app.find(function (err, data) {

            res.json(data);
        });
    });
}
