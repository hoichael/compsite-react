import getByValue from "../getByValue"
import getByKey from "../getByKey"

function TypingGameGetStats() {

    if(localStorage.getItem("typing") === null) { return {
        totalPlayed: 0,
        avgWpM: 0,
        avgCpM: 0,
        highestWpM: 0,
        highestCpM: 0,
        avgTimePerChar: 0,

        totalStandard: 0,
        totalSeeded: 0,
        totalFrenzy: 0,

        totalStandardEasy: 0,
        totalStandardMedium: 0,
        totalStandardHard: 0,
        avgTimeStandardEasy: 0,
        avgTimeStandardMedium: 0,
        avgTimeStandardHard: 0,

        totalSeededEasy: 0,
        totalSeededMedium: 0,
        totalSeededHard: 0,

        totalFrenzyEasy: 0,
        totalFrenzyMedium: 0,
        totalFrenzyHard: 0,
        avgLoopsEasy: 0,
        avgLoopsMedium: 0,
        avgLoopsHard: 0,
        mostLoopsEasy: 0,
        mostLoopsMedium: 0,
        mostLoopsHard: 0,
        }
    }

    const localStorageInfo = JSON.parse(localStorage.getItem("typing"));

    const allStandardObjects = getByValue(localStorageInfo, "mode", "Standard", false);
    const allSeededObjects = getByValue(localStorageInfo, "mode", "Seeded", false);
    const allFrenzyObjects = getByValue(localStorageInfo, "mode", "Frenzy", false);

    function getAverage(list) {
        if(!list){ return 0 };
        let total = 0;
        for(let i = 0; i < list.length; i++) {
                total += list[i];
        }
        return total / list.length;
    }

    function getHighest(list) {
        if(!list){ return 0 };
        let currentHighest = 0;
        for(let i = 0; i < list.length; i++) {
            if(list[i] > currentHighest) {
                currentHighest = list[i];
            }
        }
        return currentHighest;
    }

    const statsObj = {

        totalPlayed: localStorageInfo.length,
        avgWpM: getAverage(getByKey(localStorageInfo, "wpm")),
        avgCpM: getAverage(getByKey(localStorageInfo, "cpm")),
        highestWpM: getHighest(getByKey(localStorageInfo, "wpm")),
        highestCpM: getHighest(getByKey(localStorageInfo, "cpm")),
        avgTimePerChar: getAverage(getByKey(localStorageInfo, "avgTimePerChar")),

        totalStandard: allStandardObjects.length,
        totalSeeded: allSeededObjects.length,
        totalFrenzy: allFrenzyObjects.length,

        totalStandardEasy: getByValue(allStandardObjects, "difficulty", "Easy", true),
        totalStandardMedium: getByValue(allStandardObjects, "difficulty", "Medium", true),
        totalStandardHard: getByValue(allStandardObjects, "difficulty", "Hard", true),
        avgTimeStandardEasy: getAverage(getByKey(getByValue(getByValue(allStandardObjects, "difficulty", "Easy", false), "success", true, false), "time")),
        avgTimeStandardMedium: getAverage(getByKey(getByValue(getByValue(allStandardObjects, "difficulty", "Medium", false), "success", true, false), "time")),
        avgTimeStandardHard: getAverage(getByKey(getByValue(getByValue(allStandardObjects, "difficulty", "Hard", false), "success", true, false), "time")),

        totalSeededEasy: getByValue(allSeededObjects, "difficulty", "Easy", true),
        totalSeededMedium: getByValue(allSeededObjects, "difficulty", "Medium", true),
        totalSeededHard: getByValue(allSeededObjects, "difficulty", "Hard", true),

        totalFrenzyEasy: getByValue(allFrenzyObjects, "difficulty", "Easy", true),
        totalFrenzyMedium: getByValue(allFrenzyObjects, "difficulty", "Medium", true),
        totalFrenzyHard: getByValue(allFrenzyObjects, "difficulty", "Hard", true),
        avgLoopsEasy: getAverage(getByKey(getByValue(allFrenzyObjects, "difficulty", "Easy", false), "frenzyLoops")),
        avgLoopsMedium: getAverage(getByKey(getByValue(allFrenzyObjects, "difficulty", "Medium", false), "frenzyLoops")),
        avgLoopsHard: getAverage(getByKey(getByValue(allFrenzyObjects, "difficulty", "Hard", false), "frenzyLoops")),
        mostLoopsEasy: getHighest(getByKey(getByValue(allFrenzyObjects, "difficulty", "Easy", false), "frenzyLoops")),
        mostLoopsMedium: getHighest(getByKey(getByValue(allFrenzyObjects, "difficulty", "Medium", false), "frenzyLoops")),
        mostLoopsHard: getHighest(getByKey(getByValue(allFrenzyObjects, "difficulty", "Hard", false), "frenzyLoops")),
    }

    return statsObj;

}

export default TypingGameGetStats