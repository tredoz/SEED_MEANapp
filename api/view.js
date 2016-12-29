var mongoose = require('mongoose');
module.exports = function (app) {
    app.get('/view', function (req, res) {

        app.models.mean_app.find(function (err, data) {
            res.json({"response": data});
        });

    });
}
