import { useState, useRef } from "react"

import TypingGameNav from "./TypingGameNav"
import TypingGameGame from "./TypingGameGame"

function TypingGameManager() {

    const [managerLocation, setManagerLocation] = useState("nav");

    let seeded = useRef(false);

    const[infoObject, setInfoObject] = useState( {
        mode: undefined,
        difficulty: undefined,
        seedStart: undefined,
        seedEnd: undefined,
        segment: undefined,
        time: undefined,
        wpm: undefined,
        cpm: undefined,
        avgTimePerChar: undefined,
        errorCount: undefined,
        success: undefined,
        frenzyLoops: undefined,
        date: undefined
    } )

    function reset( oldInfoObj ) {

        if(oldInfoObj) {
            setInfoObject( {
                mode: "Seeded",
                difficulty: oldInfoObj.difficulty,
                seedStart: oldInfoObj.seedStart,
                seedEnd: oldInfoObj.seedEnd,
                segment: oldInfoObj.segment,
                time: undefined,
                wpm: undefined,
                cpm: undefined,
                avgTimePerChar: undefined,
                errorCount: undefined,
                success: undefined,
                frenzyLoops: undefined,
                date: undefined
            } )
            setManagerLocation("bruh");
            handleResetLocation();
        } else {
            setInfoObject( {
                mode: undefined,
                difficulty: undefined,
                seedStart: undefined,
                seedEnd: undefined,
                segment: undefined,
                time: undefined,
                wpm: undefined,
                cpm: undefined,
                avgTimePerChar: undefined,
                errorCount: undefined,
                success: undefined,
                date: undefined
            } )
            seeded.current = false;
            setManagerLocation("nav");
        }
    }

    function handleResetLocation() {
        setTimeout(() => {
            seeded.current = true;
            setManagerLocation("game");
        }, 2);
    }

    return (
        <div className="typing-game-div">
            <div className="typing-game-box">
                {managerLocation === "nav" && <TypingGameNav infoObj={infoObject} setInfoObj={setInfoObject} setRootLocation={setManagerLocation} reset={reset} />}
                {managerLocation === "game" && <TypingGameGame infoObj={infoObject} setInfoObj={setInfoObject} reset={reset} seeded={seeded.current}/> }
            </div>
        </div>
    )
}


export default TypingGameManager;