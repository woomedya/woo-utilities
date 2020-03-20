import * as array from './libs/array';
import * as date from './libs/date';
import * as language from './libs/language';
import * as price from './libs/price';
import * as string from './libs/string';

var onesignal = null;

export default {
    array,
    date,
    language,
    onesignal: () => {
        if (onesignal == null) {
            import * as util from './libs/onesignal';
            onesignal = util;
        }
        return onesignal;
    },
    price,
    string
}