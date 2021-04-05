
function SetLocalStorage(key, element) {

    let arr;

    if(localStorage.getItem(key) === null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem(key));
    }

    arr.push(element);
    localStorage.setItem(key, JSON.stringify(arr));
}

export default SetLocalStorage