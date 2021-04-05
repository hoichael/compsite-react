function getByKey(list, key) {
    if(!list){ return 0 };
    let arr = [];
    for(let i = 0; i < list.length; i++) {
            arr.push(list[i][key]);
    }
    return arr;
}

export default getByKey