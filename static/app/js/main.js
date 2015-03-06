/**
 *  CODE
 */

(function () {
    'use strict';

    var uReport =
{"summary":{"asserts":100,"nok":30,"ok":70},"report":[{"description":"Test examples\/Core.u.php","report":[{"description":"Description of this group test.","report":[{"description":"Testando","status":false,"trace":[{"highlight":false,"line":1,"code":"&lt;?php\n"},{"highlight":false,"line":2,"code":"\n"},{"highlight":false,"line":3,"code":"U::group('Description&nbsp;of&nbsp;this&nbsp;group&nbsp;test.',&nbsp;function(){\n"},{"highlight":true,"line":4,"code":"&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando',&nbsp;FALSE);\n"},{"highlight":false,"line":5,"code":"&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando&nbsp;denovo',&nbsp;TRUE);\n"}]},{"description":"Testando denovo","status":true,"trace":[{"highlight":false,"line":1,"code":"&lt;?php\n"},{"highlight":false,"line":2,"code":"\n"},{"highlight":false,"line":3,"code":"U::group('Description&nbsp;of&nbsp;this&nbsp;group&nbsp;test.',&nbsp;function(){\n"},{"highlight":false,"line":4,"code":"&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando',&nbsp;FALSE);\n"},{"highlight":true,"line":5,"code":"&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando&nbsp;denovo',&nbsp;TRUE);\n"},{"highlight":false,"line":6,"code":"&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando&nbsp;3',&nbsp;FALSE);\n"}]},{"description":"Testando 3","status":false,"trace":[{"highlight":false,"line":2,"code":"\n"},{"highlight":false,"line":3,"code":"U::group('Description&nbsp;of&nbsp;this&nbsp;group&nbsp;test.',&nbsp;function(){\n"},{"highlight":false,"line":4,"code":"&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando',&nbsp;FALSE);\n"},{"highlight":false,"line":5,"code":"&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando&nbsp;denovo',&nbsp;TRUE);\n"},{"highlight":true,"line":6,"code":"&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando&nbsp;3',&nbsp;FALSE);\n"},{"highlight":false,"line":7,"code":"\n"}]},{"description":"Description inner.","report":[{"description":"Testando","status":false,"trace":[{"highlight":false,"line":5,"code":"&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando&nbsp;denovo',&nbsp;TRUE);\n"},{"highlight":false,"line":6,"code":"&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando&nbsp;3',&nbsp;FALSE);\n"},{"highlight":false,"line":7,"code":"\n"},{"highlight":false,"line":8,"code":"&nbsp;&nbsp;&nbsp;&nbsp;U::group('Description&nbsp;inner.',&nbsp;function(){\n"},{"highlight":true,"line":9,"code":"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando',&nbsp;FALSE);\n"},{"highlight":false,"line":10,"code":"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando&nbsp;denovo',&nbsp;TRUE);\n"}]},{"description":"Testando denovo","status":true,"trace":[{"highlight":false,"line":6,"code":"&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando&nbsp;3',&nbsp;FALSE);\n"},{"highlight":false,"line":7,"code":"\n"},{"highlight":false,"line":8,"code":"&nbsp;&nbsp;&nbsp;&nbsp;U::group('Description&nbsp;inner.',&nbsp;function(){\n"},{"highlight":false,"line":9,"code":"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando',&nbsp;FALSE);\n"},{"highlight":true,"line":10,"code":"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando&nbsp;denovo',&nbsp;TRUE);\n"},{"highlight":false,"line":11,"code":"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando&nbsp;3',&nbsp;FALSE);\n"}]},{"description":"Testando 3","status":false,"trace":[{"highlight":false,"line":7,"code":"\n"},{"highlight":false,"line":8,"code":"&nbsp;&nbsp;&nbsp;&nbsp;U::group('Description&nbsp;inner.',&nbsp;function(){\n"},{"highlight":false,"line":9,"code":"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando',&nbsp;FALSE);\n"},{"highlight":false,"line":10,"code":"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando&nbsp;denovo',&nbsp;TRUE);\n"},{"highlight":true,"line":11,"code":"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando&nbsp;3',&nbsp;FALSE);\n"},{"highlight":false,"line":12,"code":"&nbsp;&nbsp;&nbsp;&nbsp;});\n"}]}]}]},{"description":"Description 2 of this group test.","report":[{"description":"Testando","status":true,"trace":[{"highlight":false,"line":12,"code":"&nbsp;&nbsp;&nbsp;&nbsp;});\n"},{"highlight":false,"line":13,"code":"});\n"},{"highlight":false,"line":14,"code":"\n"},{"highlight":false,"line":15,"code":"U::group('Description&nbsp;2&nbsp;of&nbsp;this&nbsp;group&nbsp;test.',&nbsp;function(){\n"},{"highlight":true,"line":16,"code":"&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando',&nbsp;TRUE);\n"},{"highlight":false,"line":17,"code":"&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando&nbsp;denovo',&nbsp;FALSE);\n"}]},{"description":"Testando denovo","status":false,"trace":[{"highlight":false,"line":13,"code":"});\n"},{"highlight":false,"line":14,"code":"\n"},{"highlight":false,"line":15,"code":"U::group('Description&nbsp;2&nbsp;of&nbsp;this&nbsp;group&nbsp;test.',&nbsp;function(){\n"},{"highlight":false,"line":16,"code":"&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando',&nbsp;TRUE);\n"},{"highlight":true,"line":17,"code":"&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando&nbsp;denovo',&nbsp;FALSE);\n"},{"highlight":false,"line":18,"code":"&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando&nbsp;3',&nbsp;TRUE);\n"}]},{"description":"Testando 3","status":true,"trace":[{"highlight":false,"line":14,"code":"\n"},{"highlight":false,"line":15,"code":"U::group('Description&nbsp;2&nbsp;of&nbsp;this&nbsp;group&nbsp;test.',&nbsp;function(){\n"},{"highlight":false,"line":16,"code":"&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando',&nbsp;TRUE);\n"},{"highlight":false,"line":17,"code":"&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando&nbsp;denovo',&nbsp;FALSE);\n"},{"highlight":true,"line":18,"code":"&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando&nbsp;3',&nbsp;TRUE);\n"},{"highlight":false,"line":19,"code":"\n"}]},{"description":"Description inner.","report":[{"description":"Testando","status":true,"trace":[{"highlight":false,"line":17,"code":"&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando&nbsp;denovo',&nbsp;FALSE);\n"},{"highlight":false,"line":18,"code":"&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando&nbsp;3',&nbsp;TRUE);\n"},{"highlight":false,"line":19,"code":"\n"},{"highlight":false,"line":20,"code":"&nbsp;&nbsp;&nbsp;&nbsp;U::group('Description&nbsp;inner.',&nbsp;function(){\n"},{"highlight":true,"line":21,"code":"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando',&nbsp;TRUE);\n"},{"highlight":false,"line":22,"code":"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando&nbsp;denovo',&nbsp;TRUE);\n"}]},{"description":"Testando denovo","status":true,"trace":[{"highlight":false,"line":18,"code":"&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando&nbsp;3',&nbsp;TRUE);\n"},{"highlight":false,"line":19,"code":"\n"},{"highlight":false,"line":20,"code":"&nbsp;&nbsp;&nbsp;&nbsp;U::group('Description&nbsp;inner.',&nbsp;function(){\n"},{"highlight":false,"line":21,"code":"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando',&nbsp;TRUE);\n"},{"highlight":true,"line":22,"code":"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando&nbsp;denovo',&nbsp;TRUE);\n"},{"highlight":false,"line":23,"code":"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando&nbsp;3',&nbsp;TRUE);\n"}]},{"description":"Testando 3","status":true,"trace":[{"highlight":false,"line":19,"code":"\n"},{"highlight":false,"line":20,"code":"&nbsp;&nbsp;&nbsp;&nbsp;U::group('Description&nbsp;inner.',&nbsp;function(){\n"},{"highlight":false,"line":21,"code":"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando',&nbsp;TRUE);\n"},{"highlight":false,"line":22,"code":"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando&nbsp;denovo',&nbsp;TRUE);\n"},{"highlight":true,"line":23,"code":"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;U::assert('Testando&nbsp;3',&nbsp;TRUE);\n"},{"highlight":false,"line":24,"code":"&nbsp;&nbsp;&nbsp;&nbsp;});\n"}]}]}]}]}]};

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
            styleOk: {width: ((uReport.summary.ok / uReport.summary.asserts) * 100) + '%'},
            styleNok: {width: ((uReport.summary.nok / uReport.summary.asserts) * 100) + '%'},
            uReport: uReport
        },
    });

    var codes = document.querySelectorAll('code'), i, l;
    for (i = 0, l = codes.length; i < l; i++) {
        hljs.highlightBlock(codes[i]);
    }
})();
