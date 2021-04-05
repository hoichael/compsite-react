import { useState } from "react"
import TypingGameCylceButtons from "./TypingGameCycleButtons"

function TypingGameHistory( { goTo } ) {
    const historyArr = JSON.parse(localStorage.getItem("typing"));

    const [currentPage, setCurrentPage] = useState(0);

    let arrLength;
    if(!historyArr) { arrLength = 0 } else { arrLength = historyArr.length};

    function genDataEntries() {

        if(!historyArr) {
            return (
                <div className="typing-game-no-seeds-txt">
                    <h1>No history recorded!</h1>
                    <h3>Why not try... playing some games?</h3>
                </div>
            )
        }

            const element = historyArr.reverse()[currentPage];
            return (
                <div key={Math.random() + Math.random() + Math.random()} className="typing-game-data-entry">
                    <div>Date: {element.date}</div>
                    <div>Mode: {element.mode}</div>
                    <div>Difficulty: {element.difficulty}</div>
                    {element.mode === "Frenzy" ? 
                    <div>Frenzy Loops: {element.frenzyLoops}</div> : 
                    <> <div>Segment: {element.segment}</div> 
                    <div>Success: {element.success ? "Yep" : "Nope"} </div> 
                    <div>Time: {element.time}</div> 
                    <div>Error Count: {element.errorCount}</div> </>}
                    <div>CpM: {element.cpm}</div>
                    <div>WpM: {element.wpm}</div>
    
                </div>
                )
    }

    return (
        <div className="typing-game-data-div">

            <div className="typing-game-data-entries-div">
                {genDataEntries()}
            </div>

            <TypingGameCylceButtons goTo={goTo} goToLocation={"main"} currentPage={currentPage} setCurrentPage={setCurrentPage} arrLength={arrLength} itemsPerPage={1} />
        </div>
    )
}

export default TypingGameHistory