function getByValue(list, key, value, count) {
    if(!list){ return 0 };
    let arr = [];
    for(let i = 0; i < list.length; i++) {
        if(list[i][key] == value) {
            arr.push(list[i]);
        }
    }
    if(count) {return arr.length} else {return arr};
}

export default getByValue