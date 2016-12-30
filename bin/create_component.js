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
            description: "What the component\'s name?(New Component)"
        }
    }
}], function (err, result) {

    var name = result.name == "" ? "New Component" : result.name;
    var controller_name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase().replaceAll(" ", "") + "Controller";
    var folder_name = name.replaceAll(" ", ".").toLowerCase();
    var class_name = name.replaceAll(" ", "-").toLowerCase();
    var camel_name = camelize(name);
    var class_wrapper_name = name.replaceAll(" ", "-").toLowerCase() + "-wrapper";

    var script_content_string = "/// <reference path='../../../../typings/angularjs/angular.d.ts' />\r\n";
    script_content_string += "angular.module('app')\r\n";
    script_content_string += "\t.controller('" + controller_name + "', ['$scope', '$system', function ($scope) {\r\n\r\n";
    script_content_string += "\t}])\r\n";
    script_content_string += "\t.directive('" + camel_name + "', [function () {\r\n";
    script_content_string += "\t\treturn {\r\n";
    script_content_string += "\t\t\ttemplateUrl: 'components/common/" + folder_name + "/view.html',\r\n";
    script_content_string += "\t\t\tcontroller: '" + controller_name + "'\r\n";
    script_content_string += "\t\t};\r\n";
    script_content_string += "\t}])\r\n";
    script_content_string += "\t.factory('$" + class_name + "', ['$rootScope', function ($rootScope) {\r\n";
    script_content_string += "\t\treturn false;\r\n";
    script_content_string += "\t}]);\r\n";

    var view_content_string = '<div class="' + class_wrapper_name + '"></div>';

    var style_content_string = "." + class_wrapper_name + " {\r\n";
    style_content_string += "\t@import \"../../../js/lib/bootstrap/less/bootstrap\";\r\n";
    style_content_string += "\t@icon-font-path: \"/js/lib/bootstrap/fonts/\";\r\n";
    style_content_string += "\t@import \"../../../css/shared\";\r\n";
    style_content_string += "}";

    createFile('./public/components/common/' + folder_name + '/script.ts', script_content_string, function (err) {
        console.error(err);
    });
    createFile('./public/components/common/' + folder_name + '/view.html', view_content_string, function (err) {
        console.error(err);
    });
    createFile('./public/components/common/' + folder_name + '/style.less', style_content_string, function (err) {
        console.error(err);
    });

    prompt.stop();
});

