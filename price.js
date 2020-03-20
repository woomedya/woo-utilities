export const getPriceFromString = (str) => {
    return Number(str.replace(/([^0-9,]+)/ig, '').replace(',', '.'));
}