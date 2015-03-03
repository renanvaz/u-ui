/**
 *  CODE
 */

(function () {
    'use strict';

    var uReport = {"summary":{"asserts":12,"nok":2,"ok":10},"report":[{"description":"Test examples\/Core.u.php","report":[{"description":"Description of this group test.","report":[{"description":"Testando","status":false,"trace":[{"highlight":false,"line":1,"code":"<?php\n"},{"highlight":false,"line":2,"code":"\n"},{"highlight":false,"line":3,"code":"U::group('Description of this group test.', function(){\n"},{"highlight":true,"line":4,"code":" U::assert('Testando', FALSE);\n"},{"highlight":false,"line":5,"code":" U::assert('Testando denovo', TRUE);\n"}]},{"description":"Testando denovo","status":true,"trace":[{"highlight":false,"line":1,"code":"<?php\n"},{"highlight":false,"line":2,"code":"\n"},{"highlight":false,"line":3,"code":"U::group('Description of this group test.', function(){\n"},{"highlight":false,"line":4,"code":" U::assert('Testando', FALSE);\n"},{"highlight":true,"line":5,"code":" U::assert('Testando denovo', TRUE);\n"},{"highlight":false,"line":6,"code":" U::assert('Testando 3', FALSE);\n"}]},{"description":"Testando 3","status":false,"trace":[{"highlight":false,"line":2,"code":"\n"},{"highlight":false,"line":3,"code":"U::group('Description of this group test.', function(){\n"},{"highlight":false,"line":4,"code":" U::assert('Testando', FALSE);\n"},{"highlight":false,"line":5,"code":" U::assert('Testando denovo', TRUE);\n"},{"highlight":true,"line":6,"code":" U::assert('Testando 3', FALSE);\n"},{"highlight":false,"line":7,"code":"\n"}]},{"description":"Description inner.","report":[{"description":"Testando","status":true,"trace":[{"highlight":false,"line":5,"code":" U::assert('Testando denovo', TRUE);\n"},{"highlight":false,"line":6,"code":" U::assert('Testando 3', FALSE);\n"},{"highlight":false,"line":7,"code":"\n"},{"highlight":false,"line":8,"code":" U::group('Description inner.', function(){\n"},{"highlight":true,"line":9,"code":" U::assert('Testando', TRUE);\n"},{"highlight":false,"line":10,"code":" U::assert('Testando denovo', TRUE);\n"}]},{"description":"Testando denovo","status":true,"trace":[{"highlight":false,"line":6,"code":" U::assert('Testando 3', FALSE);\n"},{"highlight":false,"line":7,"code":"\n"},{"highlight":false,"line":8,"code":" U::group('Description inner.', function(){\n"},{"highlight":false,"line":9,"code":" U::assert('Testando', TRUE);\n"},{"highlight":true,"line":10,"code":" U::assert('Testando denovo', TRUE);\n"},{"highlight":false,"line":11,"code":" U::assert('Testando 3', TRUE);\n"}]},{"description":"Testando 3","status":true,"trace":[{"highlight":false,"line":7,"code":"\n"},{"highlight":false,"line":8,"code":" U::group('Description inner.', function(){\n"},{"highlight":false,"line":9,"code":" U::assert('Testando', TRUE);\n"},{"highlight":false,"line":10,"code":" U::assert('Testando denovo', TRUE);\n"},{"highlight":true,"line":11,"code":" U::assert('Testando 3', TRUE);\n"},{"highlight":false,"line":12,"code":" });\n"}]}]}]},{"description":"Description 2 of this group test.","report":[{"description":"Testando","status":true,"trace":[{"highlight":false,"line":12,"code":" });\n"},{"highlight":false,"line":13,"code":"});\n"},{"highlight":false,"line":14,"code":"\n"},{"highlight":false,"line":15,"code":"U::group('Description 2 of this group test.', function(){\n"},{"highlight":true,"line":16,"code":" U::assert('Testando', TRUE);\n"},{"highlight":false,"line":17,"code":" U::assert('Testando denovo', TRUE);\n"}]},{"description":"Testando denovo","status":true,"trace":[{"highlight":false,"line":13,"code":"});\n"},{"highlight":false,"line":14,"code":"\n"},{"highlight":false,"line":15,"code":"U::group('Description 2 of this group test.', function(){\n"},{"highlight":false,"line":16,"code":" U::assert('Testando', TRUE);\n"},{"highlight":true,"line":17,"code":" U::assert('Testando denovo', TRUE);\n"},{"highlight":false,"line":18,"code":" U::assert('Testando 3', TRUE);\n"}]},{"description":"Testando 3","status":true,"trace":[{"highlight":false,"line":14,"code":"\n"},{"highlight":false,"line":15,"code":"U::group('Description 2 of this group test.', function(){\n"},{"highlight":false,"line":16,"code":" U::assert('Testando', TRUE);\n"},{"highlight":false,"line":17,"code":" U::assert('Testando denovo', TRUE);\n"},{"highlight":true,"line":18,"code":" U::assert('Testando 3', TRUE);\n"},{"highlight":false,"line":19,"code":"\n"}]},{"description":"Description inner.","report":[{"description":"Testando","status":true,"trace":[{"highlight":false,"line":17,"code":" U::assert('Testando denovo', TRUE);\n"},{"highlight":false,"line":18,"code":" U::assert('Testando 3', TRUE);\n"},{"highlight":false,"line":19,"code":"\n"},{"highlight":false,"line":20,"code":" U::group('Description inner.', function(){\n"},{"highlight":true,"line":21,"code":" U::assert('Testando', TRUE);\n"},{"highlight":false,"line":22,"code":" U::assert('Testando denovo', TRUE);\n"}]},{"description":"Testando denovo","status":true,"trace":[{"highlight":false,"line":18,"code":" U::assert('Testando 3', TRUE);\n"},{"highlight":false,"line":19,"code":"\n"},{"highlight":false,"line":20,"code":" U::group('Description inner.', function(){\n"},{"highlight":false,"line":21,"code":" U::assert('Testando', TRUE);\n"},{"highlight":true,"line":22,"code":" U::assert('Testando denovo', TRUE);\n"},{"highlight":false,"line":23,"code":" U::assert('Testando 3', TRUE);\n"}]},{"description":"Testando 3","status":true,"trace":[{"highlight":false,"line":19,"code":"\n"},{"highlight":false,"line":20,"code":" U::group('Description inner.', function(){\n"},{"highlight":false,"line":21,"code":" U::assert('Testando', TRUE);\n"},{"highlight":false,"line":22,"code":" U::assert('Testando denovo', TRUE);\n"},{"highlight":true,"line":23,"code":" U::assert('Testando 3', TRUE);\n"},{"highlight":false,"line":24,"code":" });\n"}]}]}]}]}]};

    var prepare = function(group) {
        var status = true, item, i, l;

        for (i = 0, l = group.report.length; i < l; i++) {
            item = group.report[i];

            if (item.report) {
                prepare(item);
            }

            status = status && item.status;
            item.opened = !item.status;
        }

        group.status = status;
        group.opened = !group.status;
    };

    prepare(uReport);

    Vue.component('u-group', {
        template: document.querySelector('#u-group-template').innerHTML
    });

    var app = new Vue({
        el: '#app',
        data: {
            uReport: uReport
        },
    });

    var codes = document.querySelectorAll('code'), i, l;
    for (i = 0, l = codes.length; i < l; i++) {
        hljs.highlightBlock(codes[i]);
    }
})();
