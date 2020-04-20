var timers = {};

Object.defineProperty(exports, "__esModule", {
    value: true
});

const setRefreshTimeout = exports.setRefreshTimeout = (key, func, timeout) => {
    if (timers[key])
        clearTimeout(timers[key]);
    timers[key] = setTimeout(func, timeout);
}