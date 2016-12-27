var createFile = require('create-file');

var api_content_string = "";
api_content_string += "module.exports = function (app) {\r\n";
api_content_string += "\tapp.get('/api', function (req, res) {\r\n";
api_content_string += "\t\tres.json({\"response\": \"hello world\"});\r\n";
api_content_string += "\t});\r\n";
api_content_string += "}\r\n";


createFile('./api/new.api.js', api_content_string, function (err) {

});