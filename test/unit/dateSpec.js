/*global describe, it, jasmine, expect */

describe('Testing Date.js library', function () {
    'use strict';
    var date = new Date(1370072749148);

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
});