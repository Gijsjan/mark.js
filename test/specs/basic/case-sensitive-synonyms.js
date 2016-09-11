/*!***************************************************
 * mark.js
 * https://github.com/julmot/mark.js
 * Copyright (c) 2014–2016, Julian Motz
 * Released under the MIT license https://git.io/vwTVl
 *****************************************************/
"use strict";
describe("basic mark with case sensitive synonyms", function () {
    var $ctx1, $ctx2;
    beforeEach(function (done) {
        loadFixtures("basic/case-sensitive-synonyms.html");

        $ctx1 = $(".basic-case-sensitive-synonyms > div:nth-child(1)");
        $ctx2 = $(".basic-case-sensitive-synonyms > div:nth-child(2)");
        new Mark($ctx1[0]).mark("Lorem", {
            "synonyms": {
                "Lorem": "ipsum"
            },
            "separateWordSearch": false,
            "diacritics": false,
            "caseSensitive": true,
            "done": function () {
                new Mark($ctx2[0]).mark(["one", "2", "lüfte"], {
                    "separateWordSearch": false,
                    "diacritics": false,
                    "caseSensitive": true,
                    "synonyms": {
                        "ü": "ue",
                        "one": "1",
                        "two": "2"
                    },
                    "done": function () {
                        done();
                    }
                });
            }
        });
    });

    it("should wrap synonyms as well as keywords", function () {
        expect($ctx1.find("mark")).toHaveLength(6);
        expect($ctx2.find("mark")).toHaveLength(5);
    });
});