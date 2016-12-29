var fs = require("fs");

module.exports = function (app) {
    app.get('/api/system/config/get', function (req, res) {
        var result = app.config;
        delete result.db_connect_string;
        res.json(result);
    });
}
