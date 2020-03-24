import moment from 'moment';

export const getUTCTime = (miliseconds = 0) => {
    return new Date(Date.now() + miliseconds).toISOString();
}

export const newDateWithTimeZone = (timezone, date) => {
    date = date ? new Date(date) : new Date();
    if (timezone)
        return new Date(date.toLocaleString('en-US', { timeZone: timezone.name }));
    else
        return date;
}

export const changeTimeByLang = (lang, hour, minute, second, milisecond) => {
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

export const dateValidate = (date, day) => {
    let expectedDate = moment(date);

    if (day != null)
        expectedDate.add(day, 'day');

    return new Date().toISOString() < expectedDate.toISOString();
}