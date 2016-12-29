var mongoose = require('mongoose');

module.exports = function (app) {

    var schema = mongoose.Schema({
        string: String,
        bool: Boolean,
        array: Array
    }, {
        collection: 'mean_app'
    });

     app.models.mean_app = mongoose.model('mean_app', schema);

}
