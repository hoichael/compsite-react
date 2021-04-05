import { useRef, useState } from "react"
import SetLocalStorage from "../SetLocalStorage"
import getCurrentDate from "../GetCurrentDate"
import TypingGamerResultStats from "./TypingGameResultStats"

function TypingGameResult( { infoObj, reset } ) {

    let savedSeedFlag = useRef(false);
    const [showStats, toggleStats] = useState(false);

    function saveSeed() {
        if(savedSeedFlag.current) { return };
        const seedObj = {
            difficulty: infoObj.difficulty,
            seedStart: infoObj.seedStart,
            seedEnd: infoObj.seedEnd,
            segment: infoObj.segment,
            date: getCurrentDate()
        }
        SetLocalStorage("typingSeeds", seedObj);
        document.getElementsByClassName("typing-game-btn typing-game-btn-seed")[0].classList.add("typing-game-btn-seed-clicked");
        savedSeedFlag.current = true;
    }


    return (
        <div className="typing-game-result-div">
            {infoObj.success ? <div className="typing-game-result-header typing-succ">Not Bad!</div> : <div className="typing-game-result-header typing-fail">Game Over</div>}
            {infoObj.mode != "Frenzy" && <button className="typing-game-btn" onClick={() => { reset(infoObj) }}>PLAY AGAIN</button>}
            <br></br>
            {infoObj.mode === "Standard" && <> <button onClick={() => { saveSeed() } } className="typing-game-btn typing-game-btn-seed">SAVE SEED</button> <br></br> </>}
            <button className="typing-game-btn" onClick={() => { toggleStats(!showStats) }}>STATS</button>
            <br></br>
            {showStats && <TypingGamerResultStats infoObj={infoObj} />}
            <button className="typing-game-btn" onClick={() => { reset() }}>MENU</button>
        
        </div>
    )
}

export default TypingGameResult