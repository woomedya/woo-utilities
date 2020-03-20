export const toEngCharsFromTr = (str) => {
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
        .replace(/ç/gim, "c");
}

export const turkishToLower = function (str) {
    var letters = { "İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç" };
    str = str.replace(/(([İIŞĞÜÇÖ]))/g, function (letter) { return letters[letter]; })
    return str.toLowerCase();
}

export const turkishToUpper = function (str) {
    var letters = { "i": "İ", "ş": "Ş", "ğ": "Ğ", "ü": "Ü", "ö": "Ö", "ç": "Ç", "ı": "I" };
    str = str.replace(/(([iışğüçö]))/g, function (letter) { return letters[letter]; })
    return str.toUpperCase();
}