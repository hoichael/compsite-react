function GetRange(infoObj, id) {
    let newInfoObj = infoObj;

    switch(id) {
        case 1:
            newInfoObj.difficulty = "easy"
            newInfoObj.rangeStart = 0
            newInfoObj.rangeEnd = 1
            break;
        case 2:
            newInfoObj.difficulty = "normal"
            newInfoObj.rangeStart = 1
            newInfoObj.rangeEnd = 5
            break;
        case 3:
            newInfoObj.difficulty = "hard"
            newInfoObj.rangeStart = 1
            newInfoObj.rangeEnd = 10
            break;
        case 4:
            newInfoObj.difficulty = "nope"
            newInfoObj.rangeStart = 0
            newInfoObj.rangeEnd = 99
            break;
    }

    return newInfoObj;
}

export default GetRange