const moment = require('moment');

Object.defineProperty(exports, "__esModule", {
    value: true
});

const getUTCTime = exports.getUTCTime = (miliseconds = 0) => {
    return new Date(Date.now() + miliseconds).toISOString();
}

const newDateWithTimeZone = exports.newDateWithTimeZone = (timezone, date) => {
    date = date ? new Date(date) : new Date();
    if (timezone)
        return new Date(date.toLocaleString('en-US', { timeZone: timezone.name }));
    else
        return date;
}

const changeTimeByLang = exports.changeTimeByLang = (lang, hour, minute, second, milisecond) => {
    var date = moment().locale(lang);
    if (hour)
        date.set('hour', hour);
    if (minute)
        date.set('minute', minute);
    if (second)
        date.set('second', second);
    if (milisecond)
        date.set('millisecond', milisecond);
    return date;
}

const dateValidate = exports.dateValidate = (date, day) => {
    let expectedDate = moment(date);

    if (day != null)
        expectedDate.add(day, 'day');

    return new Date().toISOString() < expectedDate.toISOString();
}