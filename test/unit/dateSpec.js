/*global describe, it, jasmine, expect */

describe('Testing Date.js library', function () {
    'use strict';

    //Update : Added this specific bit of code to resolve the timezone difference between
    // the CI server and my local machine pre-fixed date
    var date = new Date(1370072749148);

    it('Test Year conversion', function () {
        expect(date.format('yyyy')).toBe(utilDateTest('year', date));
    });

    it('Test Standard Date conversion', function () {
        expect(date.format('mmm dd yy hh:m:ss a/p')).toBe(utilDateTest('default', date));
    });

    it('Test Short Date conversion', function () {
        expect(date.format('mm/dd/yy')).toBe(utilDateTest('sdate', date));
    });

    it('Test Medium Date conversion', function () {
        expect(date.format('mmm dd, yyyy')).toBe(utilDateTest('fmonth', date));
    });

    it('Test Medium Date conversion', function () {
        expect(date.format('mmm dd, yyyy')).toBe(utilDateTest('fmonth', date));
    });

    it('Test Medium Date (Full-Month Representation) conversion', function () {
        expect(date.format('mmmm dd, yyyy')).toBe(utilDateTest('fmonth', date));
    });

    it('Test Full Date conversion', function () {
        expect(date.format('dddd, mmmm dd, yyyy')).toBe(utilDateTest('fdate', date));
    });

    it('Test Short Time conversion', function () {
        expect(date.format('hh:m a/p')).toBe(utilDateTest('stime', date));
    });

    it('Test Medium Time conversion', function () {
        expect(date.format('hh:m:ss a/p')).toBe(utilDateTest('smed', date));
    });

    it('Test ISO Date Format conversion', function () {
        expect(date.format('yyyy-mm-dd')).toBe(utilDateTest('short', date));
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

/**
 *
 * @param form {String}
 * @param date {Date}
 * @returns {string}
 */
function utilDateTest(form, date) {
    if(form === 'short') {
       return date.getFullYear() + "-" + (date.getMonth()+1).zf(2) + "-" + date.getDate();
    } else if (form  === 'smed') {
        return date.getHours() + ":" + date.getMinutes() + ":" +
            date.getSeconds() + " " +
            (date.getHours() < 12 ? 'am' : 'pm');
    } else if (form === 'stime') {
        return date.getHours() + ":" + date.getMinutes() + " " +
            (date.getHours() < 12 ? 'am' : 'pm');
    } else if (form === 'fdate') {
        return gsDayNames[date.getDay()] + ", " + gsMonthNames[date.getMonth()] + " " +
            date.getDate() + ", " + date.getFullYear();
    } else if (form === 'fmonth') {
        return gsMonthNames[date.getMonth()] + " " +
            date.getDate() + ", " + date.getFullYear();
    } else if (form === 'sdate') {
        return (date.getMonth()+1).zf(2) + "/" + date.getDate() + "/" + date.getFullYear().substr(2);
    } else if (form === 'year') {
        return date.getFullYear().toString();
    } else if (form === 'default') {
        return gsMonthNames[date.getMonth()] + " " +
            date.getDate() + " " + date.getFullYear().substr(2) + " " +
            date.getHours() + ":" + date.getMinutes() + ":" +
            date.getSeconds() + " " +
            (date.getHours() < 12 ? 'am' : 'pm');
    }

    return "";

}