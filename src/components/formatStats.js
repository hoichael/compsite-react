
function formatStats(obj) {
    let newObj = obj;
    const objKeys = Object.keys(newObj);

    for(let i = 0; i < objKeys.length; i++) {

        if(isNaN(newObj[objKeys[i]]) || !newObj[objKeys[i]]) {
            newObj[objKeys[i]] = "/"
        } else if(newObj[objKeys[i]].toString().includes(".")) {
            let newValue = newObj[objKeys[i]].toString();
            const dotIndex = newValue.indexOf(".");
            newObj[objKeys[i]] = newValue.slice(0, dotIndex + 3);
        }
    }

    return newObj;
}

export default formatStats