/*!***************************************************
 * mark.js
 * https://github.com/julmot/mark.js
 * Copyright (c) 2014–2017, Julian Motz
 * Released under the MIT license https://git.io/vwTVl
 *****************************************************/
"use strict";
describe("mark with range each callback", function () {
    var $ctx, eachCalled;
    beforeEach(function (done) {
        loadFixtures("ranges/each.html");
        eachCalled = 0;

        $ctx = $(".ranges-each");
        new Mark($ctx[0]).markRanges([
            { start: 20, len: 20 },
            { start: 60, end: 80 },
            { start: 100, end: 120 }
        ], {
            "each": function () {
                eachCalled++;
            },
            "done": done
        });
    });

    it("should call the each callback for each range element", function () {
        expect(eachCalled).toBe(3);
    });
});