/***
 *
 * Simple date format
 *
 *  @author : Ferron Hanse
 *  @date : 10/11/2010
 *  @lincense : do no evil!
 *
 */

// a global month names array
var gsMonthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


// a global day names array
var gsDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


// the date format prototype
Date.prototype.format = function (f) {
    'use strict';
    if (!this.valueOf()) {
        return ' ';
    }
    var d = this;

    return f.replace(/(yyyy|yy|mmmm|mmm|mm|m|dddd|ddd|dd|hh|ss|a\/p)/gi,
        function (val) {
            switch (val.toLowerCase()) {
            case 'yy':
                return d.getFullYear().substr(2);
            case 'yyyy':
                return d.getFullYear();
            case 'mmmm':
                return gsMonthNames[d.getMonth()];
            case 'mmm':
                return gsMonthNames[d.getMonth()].substr(0, 3);
            case 'mm':
                return (d.getMonth() + 1).zf(2);
            case 'dddd':
                return gsDayNames[d.getDay()];
            case 'ddd':
                return gsDayNames[d.getDay()].substr(0, 3);
            case 'dd':
                return d.getDate().zf(2);
            case 'hh':
                return ((d.getHours() % 12) ? d.getHours() : 12).zf(2);
            case 'm':
                return d.getMinutes().zf(2);
            case 'ss':
                return d.getSeconds().zf(2);
            case 'a/p':
                return d.getHours() < 12 ? 'am' : 'pm';
            default:
                throw new Error('Unsupported Characters Detected');
            }
        }
        );
};

// string date parse function
String.prototype.parse = function () {
    'use strict';
    var args = arguments, argLen = arguments.length, res, parts;
    if (argLen > 0) {
        parts = this.split(args[0]);
        if (parts.length === 3) {
            // returns a newly created date
            res = new Date(
                parseInt(parts[0], 10), // year
                parseInt(parts[1] ? parts[1] - 1 : 0, 10), // month
                parseInt(parts[2], 10), // date
                0, // hours
                0, // mins
                0, // secs
                0 // millisec
            );

            // format the output returned
            if (argLen === 2) {
                res = res.format(args[1]);
            }

            return res;
        }
    } else {
        throw new Error('Cannot Parse Date');
    }

};

// Zero-Fill
Number.prototype.zf = function (l) {
    'use strict';
    return '0'.string(l - this.toString().length) + this;
};

//return the sub of an integer
Number.prototype.substr = function (l) {
    'use strict';
    return this.toString().substr(l);
};

// VB-like string
String.prototype.string = function (l) {
    'use strict';
    var s = '', i = 0;
    for (i = 0; i < l; i += 1) {
        s += this;
    }
    return s;
};