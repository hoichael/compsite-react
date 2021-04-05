function getCurrentDate() {
    let now = new Date();
    let date = now.getFullYear()+"-"+(now.getMonth()+1)+"-"+now.getDate();
    let time = now.getHours() + ":" + now.getMinutes() + ":" + (now.getSeconds() < 10 ? "" + 0 + now.getSeconds() : now.getSeconds());
    let fullDateTime = date+" "+time; 
    return fullDateTime;
}

export default getCurrentDate
