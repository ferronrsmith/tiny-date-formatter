/*global describe, it, jasmine, expect */

describe('Testing Date.js library', function () {
    'use strict';

    //Update : Added this specific bit of code to resolve the timezone difference between
    // the CI server and my local machine pre-fixed date
    var _date = new Date(1370072749148);
    var _userOffset = _date.getTimezoneOffset()*60*1000; // user's offset time
    var _centralOffset = 240*60*1000; // 4 for AST - use whatever you need
    var date = new Date(_date.getTime() - _userOffset + _centralOffset);

    it('Test Year conversion', function () {
        expect(date.format('yyyy')).toBe('2013');
    });

    it('Test Standard Date conversion', function () {
        expect(date.format('mmm dd yy hh:m:ss a/p')).toBe('Jun 01 13 03:45:49 am');
    });

    it('Test Short Date conversion', function () {
        expect(date.format('mm/dd/yy')).toBe('06/01/13');
    });

    it('Test Medium Date conversion', function () {
        expect(date.format('mmm dd, yyyy')).toBe('Jun 01, 2013');
    });

    it('Test Medium Date conversion', function () {
        expect(date.format('mmm dd, yyyy')).toBe('Jun 01, 2013');
    });

    it('Test Medium Date (Full-Month Representation) conversion', function () {
        expect(date.format('mmmm dd, yyyy')).toBe('June 01, 2013');
    });

    it('Test Full Date conversion', function () {
        expect(date.format('dddd, mmmm dd, yyyy')).toBe('Saturday, June 01, 2013');
    });

    it('Test Short Time conversion', function () {
        expect(date.format('hh:m a/p')).toBe('03:45 am');
    });

    it('Test Medium Time conversion', function () {
        expect(date.format('hh:m:ss a/p')).toBe('03:45:49 am');
    });

    it('Test ISO Date Format conversion', function () {
        expect(date.format('yyyy-mm-dd')).toBe('2013-06-01');
    });

    it('Test Parse Functionality #1 ', function () {
        expect("2012/2/2".parse('/').format('dddd, mmmm dd, yyyy')).toBe('Thursday, February 02, 2012');
    });

    it('Test Parse Functionality #2 ', function () {
        expect("2012-2-2".parse('-').format('dddd, mmmm dd, yyyy')).toBe('Thursday, February 02, 2012');
    });

    it('Test Parse Functionality #2 ', function () {
        expect("2012-2-2".parse('-', 'dddd, mmmm dd, yyyy')).toBe('Thursday, February 02, 2012');
    });

    it('Test Throw Exception when unknown characters gets entered', function () {
       expect(function () {
            "2012-2-2".parse();
        }).toThrow(); // should throw a cannot parse exception
    });
});


describe('Test Date.js utility methods', function () {
    'use strict';
    it('Testing zero-fill method', function () {
        var num = 1;
        expect(num.zf(2)).toBe('01');
    });

    it('Testing Number substring functionality', function () {
        var year = 2013;
        expect(year.substr(2)).toBe('13');
    });

    it('Testing String functionality', function () {
        expect('1'.string(3)).toBe('111');
    });

});