var mongoose = require('mongoose');

module.exports = function (app) {
    var schema = mongoose.Schema({
        string: String,
        bool: Boolean,
        array: Array
    }, {
        collection: 'seed_app'
    });
    app.models.seed_app = mongoose.model('seed_app', schema);

}