export const getNameByLang = (item, lang) => {
    if (item && item.name)
        return item.name[lang] || '';
    else
        return '';
}