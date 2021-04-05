import getByValue from "../getByValue"

function NumGuessGetStats() {

    if(localStorage.getItem("numGuess") === null) { return {
        totalEasy: 0,
        totalNormal: 0,
        totalHard: 0,
        totalNope: 0,
        
        easyWon: 0,
        normalWon: 0,
        hardWon: 0,
        nopeWon: 0,
        }
    }

    const localStorageInfo = JSON.parse(localStorage.getItem("numGuess"));

    const allEasyObjects = getByValue(localStorageInfo, "difficulty", "easy", false);
    const allNormalObjects = getByValue(localStorageInfo, "difficulty", "normal", false);
    const allHardObjects = getByValue(localStorageInfo, "difficulty", "hard", false);
    const allNopeObjects = getByValue(localStorageInfo, "difficulty", "nope", false);

    const statsObj = {

        totalEasy: allEasyObjects.length,
        totalNormal: allNormalObjects.length,
        totalHard: allHardObjects.length,
        totalNope: allNopeObjects.length,
        
        easyWon: getByValue(allEasyObjects, "success", "yes", true),
        normalWon: getByValue(allNormalObjects, "success", "yes", true),
        hardWon: getByValue(allHardObjects, "success", "yes", true),
        nopeWon: getByValue(allNopeObjects, "success", "yes", true),
    }

    return statsObj;

}

export default NumGuessGetStats