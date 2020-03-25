export const distinctByField = (list, field) => {
    var temp = list.map(field);
    return list.filter((e, i) => temp.indexOf(field(e)) == i);
}

export const toRegex = (items, flags)=> {
    return items.map(item => {
        return new RegExp(item, flags || "i");
    });
}