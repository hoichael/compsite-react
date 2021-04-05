import { useState } from "react"
import TypingGameCycleButtons from "./TypingGameCycleButtons"

function TypingGameSeedSelect( { goTo, reset } ) {

    const seedsArr = JSON.parse(localStorage.getItem("typingSeeds"));

    const [currentPage, setCurrentPage] = useState(0);

    function genSeedsEntries() {

        if(!seedsArr) {
            return (
                <div className="typing-game-no-seeds-txt">
                    <h1>No seeds saved!</h1>
                    <h3>Why not try... saving some?</h3>
                </div>
            )
        }

        const arr = seedsArr.reverse().slice(currentPage, currentPage + 2);

        return arr.map(element => (
            <div key={Math.random() + Math.random() + Math.random()} data-difficulty={element.difficulty} data-segment={element.segment} data-ss={element.seedStart} data-se={element.seedEnd} className="typing-game-seeds-entry" onClick={(e) => { handleChoice(e) }}>
                <div data-difficulty={element.difficulty} data-segment={element.segment} data-ss={element.seedStart} data-se={element.seedEnd}>{element.date}</div>
                <div data-difficulty={element.difficulty} data-segment={element.segment} data-ss={element.seedStart} data-se={element.seedEnd}>{element.difficulty}</div>
                <div data-difficulty={element.difficulty} data-segment={element.segment} data-ss={element.seedStart} data-se={element.seedEnd}>{element.segment}</div>
            </div>
            ))
    }



    function handleChoice(e) {

        const newInfoObj = {
            seedStart: e.target.getAttribute("data-ss"),
            seedEnd: e.target.getAttribute("data-se"),
            difficulty: e.target.getAttribute("data-difficulty"),
            segment: e.target.getAttribute("data-segment")
        }

        reset(newInfoObj);
    }

    return (
        <div className="typing-game-data-div">

            <div className="typing-game-data-entries-div">
                {genSeedsEntries()}
            </div>

            <TypingGameCycleButtons goToLocation={"modes"} goTo={goTo} currentPage={currentPage} setCurrentPage={setCurrentPage} arrLength={seedsArr.length} itemsPerPage={2} />
        </div>
    )
}

export default TypingGameSeedSelect