Object.defineProperty(exports, "__esModule", {
    value: true
});

const toEngCharsFromTr = exports.toEngCharsFromTr = (str) => {
    return str.toLocaleLowerCase().replace(/Ğ/gim, "g")
        .replace(/Ü/gim, "u")
        .replace(/Ş/gim, "s")
        .replace(/I/gim, "i")
        .replace(/İ/gim, "i")
        .replace(/Ö/gim, "o")
        .replace(/Ç/gim, "c")
        .replace(/ğ/gim, "g")
        .replace(/ü/gim, "u")
        .replace(/ş/gim, "s")
        .replace(/ı/gim, "i")
        .replace(/ö/gim, "o")
        .replace(/ç/gim, "c")
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const turkishToLower = exports.turkishToLower = function (str) {
    var letters = { "İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç" };
    str = str.replace(/(([İIŞĞÜÇÖ]))/g, function (letter) { return letters[letter]; })
    return str.toLowerCase();
}

const turkishToUpper = exports.turkishToUpper = function (str) {
    var letters = { "i": "İ", "ş": "Ş", "ğ": "Ğ", "ü": "Ü", "ö": "Ö", "ç": "Ç", "ı": "I" };
    str = str.replace(/(([iışğüçö]))/g, function (letter) { return letters[letter]; })
    return str.toUpperCase();
}

const insert = exports.insert = (string, insertData) => {
    if (insertData && Array.isArray(insertData) && typeof insertData[0] == "string") {
        insertData.forEach((item, index) => {
            string = string.replace(new RegExp("\\{" + index + "\\}", "g"), item);
        });

        return string;
    } else if (insertData && Array.isArray(insert) && typeof insertData[0] == "object") {
        insertData.forEach((item) => {
            string = string.replace(new RegExp("\\{" + item.index + "\\}", "g"), item.value);
        });

        return string;
    } else if (insertData != null) {
        return string.replace(/\{0\}/g, insertData)
    } else {
        return string;
    }
}

const toTurkishSearchable = exports.toTurkishSearchable = (str) => {
    return str.replace(/[gGğĞ]/gim, "[gGğĞ]")
        .replace(/[uüUÜ]/gim, "[uüUÜ]")
        .replace(/[sşSŞ]/gim, "[sşSŞ]")
        .replace(/[iıIİ]/gim, "[iıIİ]")
        .replace(/[çÇcC]/gim, "[çÇcC]")
        .replace(/[OoÖö]/gim, "[OoÖö]")
}