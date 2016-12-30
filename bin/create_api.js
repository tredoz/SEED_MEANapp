var createFile = require('create-file');
var prompt = require('prompt');
function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
        return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
}
String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
prompt.start();

prompt.message = "";
prompt.get([{
    properties: {
        name: {
            description: "What the api\'s name?(New Api)"
        }
    }
}, {
    properties: {
        template: {
            description: "Which template would you like to use?\r\n0: None\r\n1: CRUD\r\n2: Auth\r\n\r\nTemplate(0)"
        }
    }
}], function (err, result) {
    var name = result.name == "" ? "New Api" : result.name;
    var controller_name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase().replaceAll(" ", "") + "Controller";
    var folder_name = name.replaceAll(" ", ".").toLowerCase();
    var class_name = name.replaceAll(" ", "-").toLowerCase();
    var camel_name = camelize(name);
    var class_wrapper_name = name.replaceAll(" ", "-").toLowerCase() + "-wrapper";
    var route_name = "/api/" + name.replaceAll(" ", "/").toLowerCase();

    var api_content_string;

    switch (result.template) {
        case "1":
            api_content_string = "";
            break;
        default:
            api_content_string = 'module.exports = function (app) {\r\n\tapp.get(\'' + route_name + '\', function (req, res) {\r\n\t\tres.json({\"response\": \"hello world\"});\r\n\t});\r\n}';
    }


    createFile('./api/' + folder_name + '.js', api_content_string, function (err) {
        console.error(err != undefined ? err : "");
    });
    prompt.stop();

});