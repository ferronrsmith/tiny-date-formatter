/**
 * Dirty util for constructing date formats that can be used to test the date formatting library
 * @param form {String}
 * @param date {Date}
 * @returns {string}
 */
function utilDateTest(form, date) {
    if(form === 'short') {
        return date.getFullYear() + "-" + (date.getMonth()+1).zf(2) + "-" + date.getDate().zf(2);
    } else if (form  === 'smed') {
        return date.getHours().zf(2) + ":" + date.getMinutes().zf(2) + ":" +
            date.getSeconds().zf(2) + " " +
            (date.getHours() < 12 ? 'am' : 'pm');
    } else if (form === 'stime') {
        return date.getHours().zf(2) + ":" + date.getMinutes().zf(2) + " " +
            (date.getHours() < 12 ? 'am' : 'pm');
    } else if (form === 'fdate') {
        return gsDayNames[date.getDay()] + ", " + gsMonthNames[date.getMonth()] + " " +
            date.getDate().zf(2) + ", " + date.getFullYear();
    } else if (form === 'fmonth') {
        return gsMonthNames[date.getMonth()].substr(0, 3) + " " +
            date.getDate().zf(2) + ", " + date.getFullYear();
    } else if (form === 'ffmonth') {
        return gsMonthNames[date.getMonth()] + " " +
            date.getDate().zf(2) + ", " + date.getFullYear();
    } else if (form === 'sdate') {
        return (date.getMonth()+1).zf(2) + "/" + date.getDate().zf(2) + "/" + date.getFullYear().substr(2);
    } else if (form === 'year') {
        return date.getFullYear().toString();
    } else if (form === 'default') {
        return gsMonthNames[date.getMonth()].substr(0, 3) + " " +
            date.getDate().zf(2) + " " + date.getFullYear().substr(2) + " " +
            date.getHours().zf(2) + ":" + date.getMinutes().zf(2) + ":" +
            date.getSeconds().zf(2) + " " +
            (date.getHours() < 12 ? 'am' : 'pm');
    }
    return "";

}